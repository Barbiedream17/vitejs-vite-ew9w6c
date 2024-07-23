import React from 'react';
import { Avatar as MantineAvatar, AvatarProps } from '@mantine/core';

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (props, ref) => <MantineAvatar ref={ref} {...props} />
);

export const AvatarImage = MantineAvatar.Image;
export const AvatarFallback = MantineAvatar.Placeholder;