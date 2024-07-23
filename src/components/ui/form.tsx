import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Box, Text } from "@mantine/core";

export const Form = FormProvider;

export const FormField = Controller;

export const useFormField = () => {
  const { getFieldState, formState } = useForm();
  return { getFieldState, formState };
};

export const FormItem = ({ className, ...props }: React.ComponentProps<typeof Box>) => (
  <Box className={className} {...props} />
);

export const FormLabel = ({ className, ...props }: React.ComponentProps<typeof Text>) => (
  <Text component="label" size="sm" weight={500} className={className} {...props} />
);

export const FormControl = ({ ...props }: React.ComponentProps<"div">) => (
  <div {...props} />
);

export const FormDescription = ({ className, ...props }: React.ComponentProps<typeof Text>) => (
  <Text size="xs" color="dimmed" className={className} {...props} />
);

export const FormMessage = ({ className, children, ...props }: React.ComponentProps<typeof Text>) => (
  <Text size="xs" color="red" className={className} {...props}>
    {children}
  </Text>
);