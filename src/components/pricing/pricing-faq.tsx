import React from 'react';
import { CustomAccordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    label: 'What is your refund policy?',
    content: 'If you are not satisfied with your purchase, you can request a refund within 30 days of the purchase date.'
  },
  {
    label: 'How do I upgrade my subscription?',
    content: 'You can upgrade your subscription by visiting your account settings and selecting a new plan.'
  },
  {
    label: 'Can I cancel my subscription at any time?',
    content: 'Yes, you can cancel your subscription at any time through your account settings.'
  }
];

const PricingFAQ: React.FC = () => (
  <div className="pricing-faq">
    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
    <CustomAccordion items={faqItems} />
  </div>
);

export default PricingFAQ;
