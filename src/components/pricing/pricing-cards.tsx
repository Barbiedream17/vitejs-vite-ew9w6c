import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<{ plan: Plan; onSubscribe: () => void }> = ({ plan, onSubscribe }) => (
  <Card className="shadow-sm p-lg">
    <CardHeader>
      <CardTitle>{plan.name}</CardTitle>
      <p>{plan.price}</p>
    </CardHeader>
    <CardContent>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button onClick={onSubscribe} variant="default">
        Subscribe
      </Button>
    </CardFooter>
  </Card>
);

const PricingCards: React.FC = () => {
  const plans: Plan[] = siteConfig.plans;

  return (
    <div className="pricing-cards grid grid-cols-1 md:grid-cols-3 gap-4">
      {plans.map((plan) => (
        <PricingCard
          key={plan.name}
          plan={plan}
          onSubscribe={() => alert(`Subscribed to ${plan.name}`)}
        />
      ))}
    </div>
  );
};

export default PricingCards;
