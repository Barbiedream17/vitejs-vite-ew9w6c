import { Avatar, Center, AvatarProps } from "@mantine/core";
import { User as UserIcon } from "lucide-react";

interface UserAvatarProps extends AvatarProps {
  user: {
    image?: string;
    name: string;
  };
}
export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <img alt="Picture" src={user.image} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
      ) : (
        <Center className="w-full h-full">
          <span className="sr-only">{user.name}</span>
          <UserIcon className="size-4" />
        </Center>
      )};
    </Avatar>
  );
}