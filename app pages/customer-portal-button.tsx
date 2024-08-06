import { CustomerPortalButton } from '@/components/forms/customer-portal-button.tsx';

const CustomerPortalButtonPage = () => {{
  return (
    <div className="p-4">
      <CustomerPortalButton userStripeId={''} />
    </div>
  );
}};

export default CustomerPortalButtonPage;
