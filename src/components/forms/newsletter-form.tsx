import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, TextInput, Alert } from '@mantine/core';
import { toast } from 'sonner';

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof schema>;

export const NewsletterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    toast.success("Subscription successful");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('email')}
        placeholder="Enter your email"
        label="Email"
      />
      {errors.email && <Alert color="red">{errors.email?.message}</Alert>}
      <Button type="submit">Subscribe</Button>
    </form>
  );
};
