import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, TextInput, Alert } from '@mantine/core';
import { toast } from 'sonner';

const schema = z.object({
  name: z.string().min(1, "Name is required"),
});

type FormData = z.infer<typeof schema>;

export const UserNameForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    toast.success("Name submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('name')}
        placeholder="Enter your name"
        label="Name"
      />
      {errors.name && <Alert color="red">{errors.name?.message}</Alert>}
      <Button type="submit">Submit</Button>
    </form>
  );
};
