import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button'; // Removed the import comment to prevent errors
import { Input } from '@/components/ui/input';

// Define the schema using zod
const userNameSchema = z.object({
  name: z.string().min(1, 'Name is required'),
});

const UserNameForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userNameSchema),
  });

  const onSubmit = (data: any) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-name-form p-4 bg-white shadow-md rounded-lg">
      <Input
        type="text"
        {...register('name')}
        placeholder="Enter your name"
        className="w-full p-2 border rounded mb-2"
      />
      {errors.name && <p className="text-red-500">{errors.name.message?.toString()}</p>}
      <Button size="sm" className="rounded bg-blue-500 text-white">
        Submit
      </Button>
    </form>
  );
};

export default UserNameForm;
