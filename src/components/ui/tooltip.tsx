import { Tooltip as MantineTooltip, TooltipProps } from '@mantine/core';

export function Tooltip({ children, label, ...props }: TooltipProps) {
  return (
    <MantineTooltip label={label} {...props}>
      {children}
    </MantineTooltip>
  );
}