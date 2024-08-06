import { Sheet } from '@/components/ui/sheet.tsx';

const SheetPage = () => {{
  return (
    <div className="p-4">
      <Sheet opened={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}};

export default SheetPage;
