import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import TailwindIndicatorPage from './pages/tailwind-indicator';
import {DeleteAccountSection} from './components/dashboard/delete-account';
import HeaderPage from './pages/header';
import InfoCardPage from './pages/info-card';
import ProjectSwitcherPage from './pages/project-switcher';
import SectionColumnsPage from './pages/section-columns';
import TransactionsListPage from './pages/transactions-list';
import UpgradeCardPage from './pages/upgrade-card';
import NewsletterFormPage from './pages/newsletter-form';
import UserAuthFormPage from './pages/user-auth-form';
import UserNameFormPage from './pages/user-name-form';
import UserRoleFormPage from './pages/user-role-form';
import DashboardSidebarPage from './pages/dashboard-sidebar';
import ModeTogglePage from './pages/mode-toggle';
import NavbarPage from './pages/navbar';
import SiteFooterPage from './pages/site-footer';
import UserAccountNavPage from './pages/user-account-nav';
import DeleteAccountModalPage from './pages/delete-account-modal';
import ProvidersPage from './pages/providers';
import SignInModalPage from './pages/sign-in-modal';
import BillingInfoPage from './pages/billing-info';
import ComparePlansPage from './pages/compare-plans';
import PricingCardsPage from './pages/pricing-cards';
import PricingFaqPage from './pages/pricing-faq';
import BentogridPage from './pages/bentogrid';
import FeaturesPage from './pages/features';
import HeroLandingPage from './pages/hero-landing';
import InfoLandingPage from './pages/info-landing';
import PoweredPage from './pages/powered';
import PreviewLandingPage from './pages/preview-landing';
import TestimonialsPage from './pages/testimonials';
import BlurImagePage from './pages/blur-image';
import CalloutPage from './pages/callout';
import CardSkeletonPage from './pages/card-skeleton';
import CopyButtonPage from './pages/copy-button';
import EmptyPlaceholderPage from './pages/empty-placeholder';
import HeaderSectionPage from './pages/header-section';
import IconsPage from './pages/icons';
import MaxWidthWrapperPage from './pages/max-width-wrapper';
import SectionSkeletonPage from './pages/section-skeleton';
import TocPage from './pages/toc';
import UserAvatarPage from './pages/user-avatar';
import AccordionPage from './pages/accordion';
import AlertDialogPage from './pages/alert-dialog';
import AlertPage from './pages/alert';
import AspectRatioPage from './pages/aspect-ratio';
import AvatarPage from './pages/avatar';
import BadgePage from './pages/badge';
import ButtonPage from './pages/button';
import CalendarPage from './pages/calendar';
import CardPage from './pages/card';
import CheckboxPage from './pages/checkbox';
import CollapsiblePage from './pages/collapsible';
import CommandPage from './pages/command';
import ContextMenuPage from './pages/context-menu';
import DialogPage from './pages/dialog';
import DropdownMenuPage from './pages/dropdown-menu';
import FormPage from './pages/form';
import HoverCardPage from './pages/hover-card';
import InputPage from './pages/input';
import LabelPage from './pages/label';
import MenubarPage from './pages/menubar';
import ModalPage from './pages/modal';
import NavigationMenuPage from './pages/navigation-menu';
import PopoverPage from './pages/popover';
import ProgressPage from './pages/progress';
import RadioGroupPage from './pages/radio-group';
import ScrollAreaPage from './pages/scroll-area';
import SelectPage from './pages/select';
import SeparatorPage from './pages/separator';
import SheetPage from './pages/sheet';
import SkeletonPage from './pages/skeleton';
import SliderPage from './pages/slider';
import SonnerPage from './pages/sonner';
import SwitchPage from './pages/switch';
import TablePage from './pages/table';
import TabsPage from './pages/tabs';
import TextareaPage from './pages/textarea';
import ToastPage from './pages/toast';
import ToasterPage from './pages/toaster';
import ToggleGroupPage from './pages/toggle-group';
import TogglePage from './pages/toggle';
import TooltipPage from './pages/tooltip';

const theme = {
  primaryColor: 'brand',
  colors: {
    brand: [
      '#F0F0F0', '#D9D9D9', '#BFBFBF', '#A6A6A6', '#8C8C8C', 
      '#737373', '#595959', '#404040', '#262626', '#0D0D0D'
    ] as const,
  },
};

const App = () => {
  return (
    <MantineProvider theme={theme} withGlobalClasses>
      <Router>
        <div className="p-4">
          <nav className="mb-4">
            <Link to="/tailwind-indicator" className="mr-4 text-blue-500">TailwindIndicator</Link>
            <Link to="/delete-account" className="mr-4 text-blue-500">DeleteAccount</Link>
            <Link to="/test" className="mr-4 text-blue-500">Test Page</Link>
            <Link to="/header" className="mr-4 text-blue-500">Header</Link>
            <Link to="/info-card" className="mr-4 text-blue-500">InfoCard</Link>
            <Link to="/project-switcher" className="mr-4 text-blue-500">ProjectSwitcher</Link>
            <Link to="/search-command" className="mr-4 text-blue-500">SearchCommand</Link>
            <Link to="/section-columns" className="mr-4 text-blue-500">SectionColumns</Link>
            <Link to="/transactions-list" className="mr-4 text-blue-500">TransactionsList</Link>
            <Link to="/upgrade-card" className="mr-4 text-blue-500">UpgradeCard</Link>
            <Link to="/page-header" className="mr-4 text-blue-500">PageHeader</Link>
            <Link to="/pager" className="mr-4 text-blue-500">Pager</Link>
            <Link to="/search" className="mr-4 text-blue-500">Search</Link>
            <Link to="/sidebar-nav" className="mr-4 text-blue-500">SidebarNav</Link>
            <Link to="/newsletter-form" className="mr-4 text-blue-500">NewsletterForm</Link>
            <Link to="/user-auth-form" className="mr-4 text-blue-500">UserAuthForm</Link>
            <Link to="/user-name-form" className="mr-4 text-blue-500">UserNameForm</Link>
            <Link to="/user-role-form" className="mr-4 text-blue-500">UserRoleForm</Link>
            <Link to="/dashboard-sidebar" className="mr-4 text-blue-500">DashboardSidebar</Link>
            <Link to="/mode-toggle" className="mr-4 text-blue-500">ModeToggle</Link>
            <Link to="/navbar" className="mr-4 text-blue-500">Navbar</Link>
            <Link to="/site-footer" className="mr-4 text-blue-500">SiteFooter</Link>
            <Link to="/user-account-nav" className="mr-4 text-blue-500">UserAccountNav</Link>
            <Link to="/delete-account-modal" className="mr-4 text-blue-500">DeleteAccountModal</Link>
            <Link to="/providers" className="mr-4 text-blue-500">Providers</Link>
            <Link to="/sign-in-modal" className="mr-4 text-blue-500">SignInModal</Link>
            <Link to="/billing-info" className="mr-4 text-blue-500">BillingInfo</Link>
            <Link to="/compare-plans" className="mr-4 text-blue-500">ComparePlans</Link>
            <Link to="/pricing-cards" className="mr-4 text-blue-500">PricingCards</Link>
            <Link to="/pricing-faq" className="mr-4 text-blue-500">PricingFaq</Link>
            <Link to="/bentogrid" className="mr-4 text-blue-500">Bentogrid</Link>
            <Link to="/features" className="mr-4 text-blue-500">Features</Link>
            <Link to="/hero-landing" className="mr-4 text-blue-500">HeroLanding</Link>
            <Link to="/info-landing" className="mr-4 text-blue-500">InfoLanding</Link>
            <Link to="/powered" className="mr-4 text-blue-500">Powered</Link>
            <Link to="/preview-landing" className="mr-4 text-blue-500">PreviewLanding</Link>
            <Link to="/testimonials" className="mr-4 text-blue-500">Testimonials</Link>
            <Link to="/blur-image" className="mr-4 text-blue-500">BlurImage</Link>
            <Link to="/callout" className="mr-4 text-blue-500">Callout</Link>
            <Link to="/card-skeleton" className="mr-4 text-blue-500">CardSkeleton</Link>
            <Link to="/copy-button" className="mr-4 text-blue-500">CopyButton</Link>
            <Link to="/empty-placeholder" className="mr-4 text-blue-500">EmptyPlaceholder</Link>
            <Link to="/header-section" className="mr-4 text-blue-500">HeaderSection</Link>
            <Link to="/icons" className="mr-4 text-blue-500">Icons</Link>
            <Link to="/max-width-wrapper" className="mr-4 text-blue-500">MaxWidthWrapper</Link>
            <Link to="/section-skeleton" className="mr-4 text-blue-500">SectionSkeleton</Link>
            <Link to="/toc" className="mr-4 text-blue-500">Toc</Link>
            <Link to="/user-avatar" className="mr-4 text-blue-500">UserAvatar</Link>
            <Link to="/accordion" className="mr-4 text-blue-500">Accordion</Link>
            <Link to="/alert-dialog" className="mr-4 text-blue-500">AlertDialog</Link>
            <Link to="/alert" className="mr-4 text-blue-500">Alert</Link>
            <Link to="/aspect-ratio" className="mr-4 text-blue-500">AspectRatio</Link>
            <Link to="/avatar" className="mr-4 text-blue-500">Avatar</Link>
            <Link to="/badge" className="mr-4 text-blue-500">Badge</Link>
            <Link to="/button" className="mr-4 text-blue-500">Button</Link>
            <Link to="/calendar" className="mr-4 text-blue-500">Calendar</Link>
            <Link to="/card" className="mr-4 text-blue-500">Card</Link>
            <Link to="/checkbox" className="mr-4 text-blue-500">Checkbox</Link>
            <Link to="/collapsible" className="mr-4 text-blue-500">Collapsible</Link>
            <Link to="/command" className="mr-4 text-blue-500">Command</Link>
            <Link to="/context-menu" className="mr-4 text-blue-500">ContextMenu</Link>
            <Link to="/dialog" className="mr-4 text-blue-500">Dialog</Link>
            <Link to="/dropdown-menu" className="mr-4 text-blue-500">DropdownMenu</Link>
            <Link to="/form" className="mr-4 text-blue-500">Form</Link>
            <Link to="/hover-card" className="mr-4 text-blue-500">HoverCard</Link>
            <Link to="/input" className="mr-4 text-blue-500">Input</Link>
            <Link to="/label" className="mr-4 text-blue-500">Label</Link>
            <Link to="/menubar" className="mr-4 text-blue-500">Menubar</Link>
            <Link to="/modal" className="mr-4 text-blue-500">Modal</Link>
            <Link to="/navigation-menu" className="mr-4 text-blue-500">NavigationMenu</Link>
            <Link to="/popover" className="mr-4 text-blue-500">Popover</Link>
            <Link to="/progress" className="mr-4 text-blue-500">Progress</Link>
            <Link to="/radio-group" className="mr-4 text-blue-500">RadioGroup</Link>
            <Link to="/scroll-area" className="mr-4 text-blue-500">ScrollArea</Link>
            <Link to="/select" className="mr-4 text-blue-500">Select</Link>
            <Link to="/separator" className="mr-4 text-blue-500">Separator</Link>
            <Link to="/sheet" className="mr-4 text-blue-500">Sheet</Link>
            <Link to="/skeleton" className="mr-4 text-blue-500">Skeleton</Link>
            <Link to="/slider" className="mr-4 text-blue-500">Slider</Link>
            <Link to="/sonner" className="mr-4 text-blue-500">Sonner</Link>
            <Link to="/switch" className="mr-4 text-blue-500">Switch</Link>
            <Link to="/table" className="mr-4 text-blue-500">Table</Link>
            <Link to="/tabs" className="mr-4 text-blue-500">Tabs</Link>
            <Link to="/textarea" className="mr-4 text-blue-500">Textarea</Link>
            <Link to="/toast" className="mr-4 text-blue-500">Toast</Link>
            <Link to="/toaster" className="mr-4 text-blue-500">Toaster</Link>
            <Link to="/toggle-group" className="mr-4 text-blue-500">ToggleGroup</Link>
            <Link to="/toggle" className="mr-4 text-blue-500">Toggle</Link>
            <Link to="/tooltip" className="mr-4 text-blue-500">Tooltip</Link>

          </nav>
          <Routes>
            <Route path="/tailwind-indicator" element={<TailwindIndicatorPage />} />
            <Route path="/delete-account" element={<DeleteAccountSection />} />
            <Route path="/test" element={<div><h1>Test Page</h1></div>} />
            <Route path="/header" element={<HeaderPage />} />
            <Route path="/info-card" element={<InfoCardPage />} />
            <Route path="/project-switcher" element={<ProjectSwitcherPage />} />
            <Route path="/section-columns" element={<SectionColumnsPage />} />
            <Route path="/transactions-list" element={<TransactionsListPage />} />
            <Route path="/upgrade-card" element={<UpgradeCardPage />} />
            <Route path="/newsletter-form" element={<NewsletterFormPage />} />
            <Route path="/user-auth-form" element={<UserAuthFormPage />} />
            <Route path="/user-name-form" element={<UserNameFormPage />} />
            <Route path="/user-role-form" element={<UserRoleFormPage />} />
            <Route path="/dashboard-sidebar" element={<DashboardSidebarPage />} />
            <Route path="/mode-toggle" element={<ModeTogglePage />} />
            <Route path="/navbar" element={<NavbarPage />} />
            <Route path="/site-footer" element={<SiteFooterPage />} />
            <Route path="/user-account-nav" element={<UserAccountNavPage />} />
            <Route path="/delete-account-modal" element={<DeleteAccountModalPage />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/sign-in-modal" element={<SignInModalPage />} />
            <Route path="/billing-info" element={<BillingInfoPage />} />
            <Route path="/compare-plans" element={<ComparePlansPage />} />
            <Route path="/pricing-cards" element={<PricingCardsPage />} />
            <Route path="/pricing-faq" element={<PricingFaqPage />} />
            <Route path="/bentogrid" element={<BentogridPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/hero-landing" element={<HeroLandingPage />} />
            <Route path="/info-landing" element={<InfoLandingPage />} />
            <Route path="/powered" element={<PoweredPage />} />
            <Route path="/preview-landing" element={<PreviewLandingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blur-image" element={<BlurImagePage />} />
            <Route path="/callout" element={<CalloutPage />} />
            <Route path="/card-skeleton" element={<CardSkeletonPage />} />
            <Route path="/copy-button" element={<CopyButtonPage />} />
            <Route path="/empty-placeholder" element={<EmptyPlaceholderPage />} />
            <Route path="/header-section" element={<HeaderSectionPage />} />
            <Route path="/icons" element={<IconsPage />} />
            <Route path="/max-width-wrapper" element={<MaxWidthWrapperPage />} />
            <Route path="/section-skeleton" element={<SectionSkeletonPage />} />
            <Route path="/toc" element={<TocPage />} />
            <Route path="/user-avatar" element={<UserAvatarPage />} />
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/alert-dialog" element={<AlertDialogPage />} />
            <Route path="/alert" element={<AlertPage />} />
            <Route path="/aspect-ratio" element={<AspectRatioPage />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="/badge" element={<BadgePage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/checkbox" element={<CheckboxPage />} />
            <Route path="/collapsible" element={<CollapsiblePage />} />
            <Route path="/command" element={<CommandPage />} />
            <Route path="/context-menu" element={<ContextMenuPage />} />
            <Route path="/dialog" element={<DialogPage />} />
            <Route path="/dropdown-menu" element={<DropdownMenuPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/hover-card" element={<HoverCardPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/label" element={<LabelPage />} />
            <Route path="/menubar" element={<MenubarPage />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/navigation-menu" element={<NavigationMenuPage />} />
            <Route path="/popover" element={<PopoverPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/radio-group" element={<RadioGroupPage />} />
            <Route path="/scroll-area" element={<ScrollAreaPage />} />
            <Route path="/select" element={<SelectPage />} />
            <Route path="/separator" element={<SeparatorPage />} />
            <Route path="/sheet" element={<SheetPage />} />
            <Route path="/skeleton" element={<SkeletonPage />} />
            <Route path="/slider" element={<SliderPage />} />
            <Route path="/sonner" element={<SonnerPage />} />
            <Route path="/switch" element={<SwitchPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/textarea" element={<TextareaPage />} />
            <Route path="/toast" element={<ToastPage />} />
            <Route path="/toaster" element={<ToasterPage />} />
            <Route path="/toggle-group" element={<ToggleGroupPage />} />
            <Route path="/toggle" element={<TogglePage />} />
            <Route path="/tooltip" element={<TooltipPage />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
};

export default App;
