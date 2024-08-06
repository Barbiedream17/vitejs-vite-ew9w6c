import { BillingInfo } from '@/components/pricing/billing-info.tsx';

const BillingInfoPage = () => {{
  return (
    <div className="p-4">
      <BillingInfo userSubscriptionPlan={null} />
    </div>
  );
}};

export default BillingInfoPage;
