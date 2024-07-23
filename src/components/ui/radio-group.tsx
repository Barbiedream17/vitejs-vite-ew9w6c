import { Radio, RadioGroup as MantineRadioGroup, RadioGroupProps, RadioProps } from '@mantine/core';

export function RadioGroup(props: RadioGroupProps) {
  return <MantineRadioGroup {...props} />;
}

export function RadioGroupItem(props: RadioProps) {
  return <Radio {...props} />;
}