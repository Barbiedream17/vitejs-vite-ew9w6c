import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PreviewLanding = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preview Your Landing Page</CardTitle>
        <CardDescription>
          This is how your landing page will look like. Make sure everything is perfect.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content of the landing page goes here...</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" onClick={() => alert('Previewing...')}>
          Preview
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PreviewLanding;
