import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InfoLanding = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Information Landing</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Provide essential information about your product or service here.</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" onClick={() => alert('Get more info')}>
          Get More Info
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InfoLanding;
