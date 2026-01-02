import { AppShell, Group } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import logo from '../rose.svg';
import { Nav } from '../components/Nav/Nav';
import { Icons } from '../components/Icons/Icons';

export function HomePage() {
  return (
    <AppShell
      header={{ height: 55 }}
      padding="lg"
    >
      <AppShell.Header>
        <Group justify='space-between' p="sm">
          <Group align='flex-end'>
            <img src={logo} alt="My Logo" style={{ width: '30px' }} />
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
