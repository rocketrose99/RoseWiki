import '@mantine/core/styles.css';

import { AppShell, Group, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { Icons } from './components/Icons/Icons';
import { Nav } from './components/Nav/Nav';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 55 }} padding="lg">
        <AppShell.Header>
          <Group justify="space-between" p="sm">
            <Group align="flex-end">
              <img src={'/rose.svg'} alt="My Logo" style={{ width: '30px' }} />
              <Nav />
            </Group>
            <Icons />
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
