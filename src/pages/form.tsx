import { Form } from '@/components/ui/form.tsx';

const FormPage = () => {{
  return (
    <div className="p-4">
      <Form onSubmit={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}};

export default FormPage;
