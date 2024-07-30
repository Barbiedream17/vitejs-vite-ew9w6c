import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface TransactionsListProps {
  children: ReactNode;
  className?: string;
}

const TransactionsList: React.FC<TransactionsListProps> = ({ children, className }) => {
  return <div className={`transactions-list ${className}`}>{children}</div>;
};

const TransactionsListExample = () => {
  return (
    <TransactionsList className="transactions-list-example p-4 bg-white shadow-md rounded-lg">
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span>Transaction 1</span>
          <span>$100</span>
        </li>
        <li className="flex justify-between">
          <span>Transaction 2</span>
          <span>$200</span>
        </li>
        <li className="flex justify-between">
          <span>Transaction 3</span>
          <span>$300</span>
        </li>
      </ul>
      <Link to="/more-transactions" className="flex items-center text-blue-500">
        View more transactions
        <ArrowUpRight className="ml-1" />
      </Link>
    </TransactionsList>
  );
};

export default TransactionsListExample;
