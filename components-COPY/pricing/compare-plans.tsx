import React from 'react';
import { Table } from '@mantine/core';

const plans = [
  { name: 'Basic', price: '$10/mo', features: ['Feature 1', 'Feature 2'] },
  { name: 'Pro', price: '$20/mo', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  { name: 'Enterprise', price: '$30/mo', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
];

const ComparePlans: React.FC = () => (
  <Table>
    <thead>
      <tr>
        <th>Plan</th>
        <th>Price</th>
        <th>Features</th>
      </tr>
    </thead>
    <tbody>
      {plans.map((plan, index) => (
        <tr key={index}>
          <td>{plan.name}</td>
          <td>{plan.price}</td>
          <td>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ComparePlans;
