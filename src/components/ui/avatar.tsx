import { Avatar as MantineAvatar, AvatarProps as MantineAvatarProps } from '@mantine/core';

export interface AvatarProps extends MantineAvatarProps {}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <MantineAvatar {...props} />;
};
