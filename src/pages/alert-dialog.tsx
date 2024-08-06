import { AlertDialog } from '@/components/ui/alert-dialog';

const AlertDialogPage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="p-4">
      <AlertDialog opened={opened} onClose={() => setOpened(false)} />
      <button onClick={() => setOpened(true)}>Open AlertDialog</button>
    </div>
  );
};

export default AlertDialogPage;
