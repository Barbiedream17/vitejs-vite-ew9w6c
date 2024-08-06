import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Define the schema using zod
const billingSchema = z.object({
  cardNumber: z.string().min(16, { message: 'Card number must be 16 digits' }),
  expiryDate: z.string().min(5, { message: 'Expiry date must be MM/YY' }),
  cvv: z.string().min(3, { message: 'CVV must be at least 3 digits' }),
});

const BillingInfo: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(billingSchema),
  });

  const onSubmit = (data: any) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="billing-info-form p-4 bg-white shadow-md rounded-lg">
      <Input
        type="text"
        {...register('cardNumber')}
        placeholder="Card Number"
        className="w-full p-2 border rounded mb-2"
      />
      {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message?.toString()}</p>}
      <Input
        type="text"
        {...register('expiryDate')}
        placeholder="MM/YY"
        className="w-full p-2 border rounded mb-2"
      />
      {errors.expiryDate && <p className="text-red-500">{errors.expiryDate.message?.toString()}</p>}
      <Input
        type="text"
        {...register('cvv')}
        placeholder="CVV"
        className="w-full p-2 border rounded mb-2"
      />
      {errors.cvv && <p className="text-red-500">{errors.cvv.message?.toString()}</p>}
      <Button type="submit" size="sm" className="rounded bg-blue-500 text-white">
        Submit
      </Button>
    </form>
  );
};

export default BillingInfo;
