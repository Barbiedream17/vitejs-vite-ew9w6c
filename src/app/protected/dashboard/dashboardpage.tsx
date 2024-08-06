import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Grid, Container } from '@mantine/core';
import { getCurrentUser } from '@/lib/session';
import { DashboardHeader } from '@/components/dashboard/header';
import InfoCard from '@/components/dashboard/info-card';
import { DashboardShell } from '@/components/dashboard/shell';
import TransactionsList from '@/components/dashboard/transactions-list';

type User = {
  role: string;
  // other properties...
};

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getCurrentUser();
      if (fetchedUser && 'role' in fetchedUser) {
        setUser(fetchedUser as User);
      }
    };

    fetchUser();
  }, []);

  if (!user || user.role !== "ADMIN") {
    return <Navigate to="/login" />;
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Your dashboard overview." />
      <Container>
        <Grid>
          <Grid.Col span={4}><InfoCard /></Grid.Col>
          <Grid.Col span={8}><TransactionsList /></Grid.Col>
        </Grid>
      </Container>
    </DashboardShell>
  );
};

export default DashboardPage;
