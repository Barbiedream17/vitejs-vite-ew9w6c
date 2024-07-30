import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Modal, Button } from '@mantine/core';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner'; // Assuming you use the sonner library for toasts

// Define the schema using zod
const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const SignInModal: React.FC<{ opened: boolean; onClose: () => void }> = ({ opened, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = () => {
    // Handle form submission
    toast.success('Sign in successful!');
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Sign In">
      <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form p-4">
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
        <Button type="submit" className="rounded bg-blue-500 text-white">
          Sign In
        </Button>
      </form>
    </Modal>
  );
};

export default SignInModal;
