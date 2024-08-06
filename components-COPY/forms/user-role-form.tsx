import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select, Button } from '@mantine/core';

// Define the schema using zod
const userRoleSchema = z.object({
  role: z.enum(['Admin', 'User']),
});

const UserRoleForm: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(userRoleSchema),
  });

  const onSubmit = (data: any) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-role-form p-4 bg-white shadow-md rounded-lg">
      <Select
        {...register('role')}
        onChange={(value) => setValue('role', value as 'Admin' | 'User')}
        className="w-full mb-2"
        data={[
          { value: 'Admin', label: 'Admin' },
          { value: 'User', label: 'User' },
        ]}
      />
      <Button type="submit" size="sm" className="rounded bg-blue-500 text-white">
        Submit
      </Button>
    </form>
  );
};

export default UserRoleForm;
