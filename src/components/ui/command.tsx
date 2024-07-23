import React from "react";
import { Autocomplete, Box, Modal, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const Command = Autocomplete;

export const CommandDialog = Modal;

export const CommandInput = Autocomplete;

export const CommandList = Box;

export const CommandEmpty = Text;

export const CommandGroup = Box;

export const CommandSeparator = ({ className, ...props }: React.ComponentProps<"hr">) => (
  <hr className={className} {...props} />
);

export const CommandItem = Autocomplete.Item;

export const CommandShortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={className} {...props} />
);