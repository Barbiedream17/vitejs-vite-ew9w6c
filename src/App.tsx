import React, { useEffect } from 'react';
import { MantineProvider, ColorSchemeProvider, Button, Text } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';

import '@/styles/globals.css';
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import ModalProvider from "@/components/modals/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";

function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = React.useState(preferredColorScheme);

  const toggleColorScheme = (value?: 'light' | 'dark') =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://your-umami-instance.com/umami.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-website-id', 'your-website-id');
    document.body.appendChild(script);
  }, []);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Router>
          <div className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontUrban.variable,
            fontHeading.variable,
            fontGeist.variable,
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
              <Text size="xl" weight={700}>Vite + React + Mantine</Text>
              <div className="card">
                <Button onClick={() => setCount((count) => count + 1)}>
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
    </ColorSchemeProvider>
  );
}

export default App;