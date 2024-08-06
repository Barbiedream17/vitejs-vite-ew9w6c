import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

// Define the schema using zod
const newsletterSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

const NewsletterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = () => {
    // Handle form submission
    toast.success('Subscription successful!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form p-4 bg-white shadow-md rounded-lg">
      <Input
        type="email"
        {...register('email')}
        placeholder="Enter your email"
        className="w-full p-2 border rounded mb-2"
      />
      {errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
      <Button size="sm" className="rounded bg-blue-500 text-white">
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
