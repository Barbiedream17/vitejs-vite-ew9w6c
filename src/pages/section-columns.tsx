import { SectionColumns } from '@/components/dashboard/section-columns.tsx';

const SectionColumnsPage = () => {
  return (
    <div className="p-4">
      <SectionColumns title="Section Title">
        <p>Your content here</p>
      </SectionColumns>
    </div>
  );
};

export default SectionColumnsPage;
