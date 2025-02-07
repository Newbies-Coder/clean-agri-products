import loading from "@/assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#F5F4E1]">
      <img src={loading} alt="Loading..." />
      <p className="text-xl font-medium">Please wait a moment...</p>
    </div>
  );
};

export default Loading;
