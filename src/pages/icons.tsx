import { Icons } from '@/components/shared/icons.tsx';

const IconsPage = () => {
  return (
    <div className="p-4">
      {/* Example usage of an individual icon */}
      <Icons.add />
      <Icons.arrowRight />
      <Icons.arrowUpRight />
      {/* Add more icons as needed */}
    </div>
  );
};

export default IconsPage;
