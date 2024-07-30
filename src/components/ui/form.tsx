import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const Form = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Name should have at least 2 characters' }),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message as React.ReactNode}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
