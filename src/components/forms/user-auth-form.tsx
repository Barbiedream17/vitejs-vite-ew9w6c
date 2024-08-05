import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, TextInput, PasswordInput, Alert } from '@mantine/core';
import { toast } from 'sonner';

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormData = z.infer<typeof schema>;

export const UserAuthForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    toast.success("Form submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('email')}
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      {errors.email && <Alert color="red">{errors.email?.message}</Alert>}
      <PasswordInput
        {...register('password')}
        placeholder="Enter your password"
        label="Password"
      />
      {errors.password && <Alert color="red">{errors.password?.message}</Alert>}
      <Button type="submit">Submit</Button>
    </form>
  );
};
