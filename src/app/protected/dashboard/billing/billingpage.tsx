import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert, Text, Container } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { getCurrentUser } from "@/lib/session"; // Ensure this import points to the correct path
import { getUserSubscriptionPlan } from "@/lib/subscription"; // Ensure this import is correct
import { DashboardHeader } from "@/components/dashboard/header"; // Ensure this component exists
import { DashboardShell } from "@/components/dashboard/shell"; // Ensure this component exists
import { BillingInfo } from "@/components/pricing/billing-info"; // Ensure this component exists
import { User, UserSubscriptionPlan } from "@/types/types"; // Ensure correct path to your types file

const BillingPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [subscriptionPlan, setSubscriptionPlan] = useState<UserSubscriptionPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
          setError('User not found');
          setLoading(false);
          return;
        }
        setUser(currentUser);

        const plan = await getUserSubscriptionPlan(currentUser.id);
        setSubscriptionPlan(plan);
      } catch (err) {
        setError('Failed to load user or subscription plan');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return (
      <Container>
        <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
          {error}
        </Alert>
      </Container>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Billing" /> {/* Pass the heading prop */}
      <BillingInfo userSubscriptionPlan={subscriptionPlan} /> {/* Ensure BillingInfo accepts this prop */}
    </DashboardShell>
  );
};

export default BillingPage;
