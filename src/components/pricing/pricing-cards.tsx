import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@mantine/core';
import { siteConfig } from '@/config/site';

interface Plan {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export const PricingCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {siteConfig.plans.map((plan: Plan) => (
        <Card key={plan.id} className="p-4">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{plan.description}</p>
            {plan.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="mt-4">Choose Plan</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
