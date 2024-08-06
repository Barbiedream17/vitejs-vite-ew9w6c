import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, TextInput, Alert, Card, Text } from '@mantine/core';
import { UserSubscriptionPlan } from '@/types/types'; // Ensure the correct path to types file

const schema = z.object({
  cardNumber: z.string().min(16, "Card number must be 16 digits"),
  expiryDate: z.string().min(5, "Expiry date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV must be 3 digits"),
});

type FormData = z.infer<typeof schema>;

interface BillingInfoProps {
  userSubscriptionPlan: UserSubscriptionPlan | null;
}

export const BillingInfo: React.FC<BillingInfoProps> = ({ userSubscriptionPlan }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      {userSubscriptionPlan ? (
        <Card>
          <Text>Plan: {userSubscriptionPlan.name}</Text>
          <Text>Description: {userSubscriptionPlan.description}</Text>
          <Text>Interval: {userSubscriptionPlan.interval}</Text>
          <Text>Paid: {userSubscriptionPlan.isPaid ? 'Yes' : 'No'}</Text>
        </Card>
      ) : (
        <Text>No subscription plan found.</Text>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <TextInput
          {...register('cardNumber')}
          placeholder="Card Number"
          label="Card Number"
          className="w-full"
        />
        {errors.cardNumber && <Alert color="red">{errors.cardNumber?.message}</Alert>}
        <TextInput
          {...register('expiryDate')}
          placeholder="Expiry Date (MM/YY)"
          label="Expiry Date"
          className="w-full"
        />
        {errors.expiryDate && <Alert color="red">{errors.expiryDate?.message}</Alert>}
        <TextInput
          {...register('cvv')}
          placeholder="CVV"
          label="CVV"
          className="w-full"
        />
        {errors.cvv && <Alert color="red">{errors.cvv?.message}</Alert>}
        <Button type="submit" size="sm" className="w-full">Submit</Button>
      </form>
    </div>
  );
};
