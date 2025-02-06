import React, { useState } from "react";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Upload, message } from "antd";
import axios from "axios";

const ChangeAvatarForm: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileBlob, setFileBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);

  const props: UploadProps = {
    action: "/api/upload",
    showUploadList: false,
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement("img");
          img.src = reader.result as string;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((result) => {
              setFileBlob(result as Blob);
              setImageUrl(URL.createObjectURL(result as Blob));
              resolve(result as Blob);
            });
          };
        };
      });
    },
  };

  const handleSave = async () => {
    if (!fileBlob) return;

    setLoading(true);
    try {
      // Create FormData to upload the image to `/api/upload`
      const formData = new FormData();
      formData.append("file", fileBlob);

      // Upload image to API
      const uploadRes = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const cloudinaryUrl = uploadRes.data.url;
      if (!cloudinaryUrl) throw new Error("Failed to retrieve image URL");

      // Send the image URL to `/api/avatar`
      await axios.post("/api/avatar", { avatar: cloudinaryUrl });

      message.success("Avatar updated successfully!");
      setImageUrl(cloudinaryUrl);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {imageUrl ? (
        <div className="relative flex flex-col items-center gap-2">
          <img
            src={imageUrl}
            alt="Avatar"
            className="w-56 h-56 rounded-full object-cover border border-gray-300"
          />
          <div className="flex gap-4 mt-4">
            {loading || (
              <Button
                danger
                onClick={() => setImageUrl(null)}
                className="p-5 text-xl"
              >
                Delete
              </Button>
            )}

            <Button
              type="primary"
              onClick={handleSave}
              loading={loading}
              icon={loading ? <LoadingOutlined /> : undefined}
              className="py-5 px-6 text-xl bg-primary hover:!bg-primary/80 !text-primary-foreground"
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <Upload {...props}>
          <Button
            icon={<UploadOutlined />}
            className="px-10 py-6 text-xl mt-5 !bg-primary hover:!bg-primary/80 hover:!border-primary/80 !text-primary-foreground"
          >
            Upload
          </Button>
        </Upload>
      )}
    </div>
  );
};

export default ChangeAvatarForm;
