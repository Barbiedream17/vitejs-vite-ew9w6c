import React from 'react';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

const PricingFAQ: React.FC = () => (
  <div className="pricing-faq p-4 bg-white shadow-md rounded-lg">
    <h2>Frequently Asked Questions</h2>
    <Accordion>
      <AccordionItem label="What payment methods do you accept?">
        We accept all major credit cards.
      </AccordionItem>
      <AccordionItem label="Can I cancel my subscription?">
        Yes, you can cancel your subscription at any time.
      </AccordionItem>
      <AccordionItem label="Do you offer refunds?">
        Refunds are provided within the first 30 days of subscription.
      </AccordionItem>
    </Accordion>
  </div>
);

export default PricingFAQ;
