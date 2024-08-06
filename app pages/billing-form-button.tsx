import { BillingFormButton } from '@/components/forms/billing-form-button.tsx';

const BillingFormButtonPage = () => {{
  return (
    <div className="p-4">
      <BillingFormButton offer={undefined} subscriptionPlan={undefined} year={false} />
    </div>
  );
}};

export default BillingFormButtonPage;
