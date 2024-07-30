import { useState } from 'react';
import { MantineProvider, Button, Text, createTheme, MantineColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';

import { cn } from '@/lib/utils';
import ModalProvider from '@/components/modals/providers';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme] = useState<MantineColorScheme>(preferredColorScheme);
  const [count, setCount] = useState(0);

  const theme = createTheme({
    // Add your theme customizations here
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <Router>
        <div className={cn(
          'min-h-screen bg-background font-sans antialiased',
        )}>
          <ModalProvider>
            {/* Your existing content */}
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <Text size="xl" fw={700}>Vite + React + Mantine</Text>
            <div className="card">
              <Button onClick={() => setCount(count + 1)}>
                count is {count}
              </Button>
              <Text>
                Edit <code>src/App.tsx</code> and save to test HMR
              </Text>
            </div>
            <Text className="read-the-docs">
              Click on the Vite and React logos to learn more
            </Text>
          </ModalProvider>
          <Notifications />
          <TailwindIndicator />
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;