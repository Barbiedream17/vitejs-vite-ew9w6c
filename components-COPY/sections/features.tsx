import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Features = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Features</CardTitle>
      </CardHeader>
      <CardContent>
        <p>List all the features of your product or service here.</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" onClick={() => alert('Explore features')}>
          Explore Features
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Features;
