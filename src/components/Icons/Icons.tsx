import { ActionIcon, Group } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export function Icons() {
  return (
    <Group justify="flex-end" gap="xs">
      <ActionIcon
        component="a"
        href="https://github.com/rocketrose99?tab=repositories"
        size="md"
        aria-label="Open in a new tab"
        variant='light'
        >
        <IconBrandGithub />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://www.linkedin.com/in/s-rose-lindauer/"
        size="md"
        aria-label="Open in a new tab"
        variant='light'
        >
        <IconBrandLinkedin />
      </ActionIcon>
      <ColorSchemeToggle />
    </Group>
  );
}
