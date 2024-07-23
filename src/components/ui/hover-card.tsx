import { HoverCard as MantineHoverCard } from "@mantine/core";

export function HoverCard({ children, ...props }) {
  return <MantineHoverCard {...props}>{children}</MantineHoverCard>;
}

export function HoverCardTrigger({ children, ...props }) {
  return <MantineHoverCard.Target {...props}>{children}</MantineHoverCard.Target>;
}

export function HoverCardContent({ children, ...props }) {
  return <MantineHoverCard.Dropdown {...props}>{children}</MantineHoverCard.Dropdown>;
}