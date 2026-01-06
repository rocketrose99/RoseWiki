import { Anchor, Group } from '@mantine/core';

export function Nav() {
  return (
    <Group>
      <Anchor href="/">Home</Anchor>
      <Anchor href="/about">About</Anchor>
      <Anchor href="/work-experience">Work Experience</Anchor>
      <Anchor href="/contact">Contact</Anchor>
    </Group>
  );
}
