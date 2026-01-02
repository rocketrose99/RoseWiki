import { AppShell, Group } from '@mantine/core';
import { Icons } from '../components/Icons/Icons';
import { Nav } from '../components/Nav/Nav';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
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
        <Welcome />
      </AppShell.Main>
    </AppShell>
  );
}
