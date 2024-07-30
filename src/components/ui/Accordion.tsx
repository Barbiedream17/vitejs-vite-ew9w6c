import React from "react";
import { Accordion as MantineAccordion } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = MantineAccordion;

interface AccordionItemProps {
  className?: string;
  label: React.ReactNode;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ className, label, children }) => (
  <MantineAccordion.Item className={cn("border-b", className)} value={String(label)}>
    <MantineAccordion.Control className={cn(
      "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline max-sm:text-sm"
    )}>
      {label}
      <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
    </MantineAccordion.Control>
    <MantineAccordion.Panel className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    )}>
      <div className="pb-4 pt-0">{children}</div>
    </MantineAccordion.Panel>
  </MantineAccordion.Item>
);

interface CustomAccordionProps {
  items: { label: string; content: React.ReactNode }[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => (
  <Accordion>
    {items.map((item, index) => (
      <AccordionItem key={index} label={item.label} className="">
        {item.content}
      </AccordionItem>
    ))}
  </Accordion>
);

export { Accordion, AccordionItem, CustomAccordion };
