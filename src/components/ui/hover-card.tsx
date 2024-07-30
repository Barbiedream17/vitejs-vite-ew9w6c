import { ReactNode, forwardRef } from 'react';
import { HoverCard as MantineHoverCard, HoverCardProps } from '@mantine/core';

interface CustomHoverCardProps extends Omit<HoverCardProps, 'children'> {
  children: ReactNode;
}

const CustomHoverCard = forwardRef<HTMLDivElement, CustomHoverCardProps>(
  ({ children, ...props }) => (
    <MantineHoverCard {...props}>
      {children}
    </MantineHoverCard>
  )
);

CustomHoverCard.displayName = 'CustomHoverCard';

export { CustomHoverCard as HoverCard };