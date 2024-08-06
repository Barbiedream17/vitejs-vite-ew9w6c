import { DashboardSidebar } from '@/components/layout/dashboard-sidebar.tsx';

const links = [
  {
    title: "Main",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: "home" },
      { title: "Settings", href: "/settings", icon: "settings" },
    ],
  },
];

const DashboardSidebarPage = () => {
  return (
    <div className="p-4">
      <DashboardSidebar links={links} />
    </div>
  );
};

export default DashboardSidebarPage;
