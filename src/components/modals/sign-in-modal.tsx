import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, TextInput, Alert } from '@mantine/core';

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormData = z.infer<typeof schema>;

export const SignInModal: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        {...register('email')}
        placeholder="Enter your email"
        label="Email"
        className="w-full"
      />
      {errors.email && <Alert color="red">{errors.email?.message}</Alert>}
      <TextInput
        {...register('password')}
        placeholder="Enter your password"
        label="Password"
        type="password"
        className="w-full"
      />
      {errors.password && <Alert color="red">{errors.password?.message}</Alert>}
      <Button type="submit" className="w-full">Sign In</Button>
    </form>
  );
};
