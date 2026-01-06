import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export function Icons() {
  return (
    <Group justify="flex-end" gap="xs">
      <Tooltip label="See my GitHub repositories">
        <ActionIcon
          component="a"
          href="https://github.com/rocketrose99?tab=repositories"
          size="md"
          aria-label="Open in a new tab"
          variant="light"
        >
          <IconBrandGithub />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="See my LinkedIn profile">
        <ActionIcon
          component="a"
          href="https://www.linkedin.com/in/s-rose-lindauer/"
          size="md"
          aria-label="Open in a new tab"
          variant="light"
        >
          <IconBrandLinkedin />
        </ActionIcon>
      </Tooltip>
      <ColorSchemeToggle />
    </Group>
  );
}
