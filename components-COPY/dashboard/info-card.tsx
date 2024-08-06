import React from 'react';
import { Users } from "lucide-react";

// Define props for Card components
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardHeader: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardTitle: React.FC<CardProps> = ({ children, className }) => (
  <h3 className={className}>{children}</h3>
);

const CardContent: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default function InfoCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
        <Users className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
      </CardContent>
    </Card>
  );
}