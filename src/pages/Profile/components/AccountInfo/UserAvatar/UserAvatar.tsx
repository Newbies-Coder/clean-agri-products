import { user } from "@/mocks/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ChangeAvatarForm from "./ChangeAvatarForm";

const UserAvatar = () => {
  // user data
  const { avatar, full_name } = user;
  return (
    <div className="flex flex-col justify-center">
      {/* Avatar */}
      <Avatar className="w-56 h-56 mx-auto">
        <AvatarImage src={avatar} />
        <AvatarFallback>{full_name.charAt(0)}</AvatarFallback>
      </Avatar>

      {/* Change avatar */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-44 mx-auto mt-6 bg-transparent py-5 text-primary border-primary border-2 rounded-full font-medium hover:bg-primary hover:text-primary-foreground">Change Avatar</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium">Change Avatar</DialogTitle>
            <DialogDescription>
              Let us know how you want to change your avatar.
            </DialogDescription>
          </DialogHeader>
          <ChangeAvatarForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserAvatar;
