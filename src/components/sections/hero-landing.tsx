import { Button } from '@/components/ui/button';
import { toast } from 'sonner'; // Use toast directly from Sonner library
import { siteConfig } from '@/config/site';

export const HeroLanding = () => {
  const handleClick = () => {
    toast('Button clicked!');
  };

  return (
    <div className="hero-landing">
      <h1>Welcome to {siteConfig.name}</h1>
      <p>Discover our amazing features and offerings.</p>
      <Button onClick={handleClick} variant="default">
        Get Started
      </Button>
    </div>
  );
};
