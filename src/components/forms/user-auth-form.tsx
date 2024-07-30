import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

// Define the schema using zod
const userAuthSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const UserAuthForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userAuthSchema),
  });

  const onSubmit = () => {
    // Handle form submission
    toast('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-auth-form p-4 bg-white shadow-md rounded-lg">
      <Input
        type="email"
        {...register('email')}
        placeholder="Enter your email"
        className="w-full p-2 border rounded mb-2"
      />
      {errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
      <Input
        type="password"
        {...register('password')}
        placeholder="Enter your password"
        className="w-full p-2 border rounded mb-2"
      />
      {errors.password && <p className="text-red-500">{errors.password.message?.toString()}</p>}
      <Button size="sm" className="rounded bg-blue-500 text-white">
        Log In
      </Button>
    </form>
  );
};

export default UserAuthForm;
