import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Powered = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Powered by Our Technology</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Our technology powers thousands of websites worldwide.</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" onClick={() => alert('Learn more')}>
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Powered;
