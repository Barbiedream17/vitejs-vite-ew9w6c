import { Collapse } from '@mantine/core';

export const Collapsible = Collapse;
export const CollapsibleTrigger = ({ children, ...props }: React.ComponentProps<"button">) => (
  <button {...props}>{children}</button>
);
export const CollapsibleContent = Collapse;