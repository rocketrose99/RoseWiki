import { useEffect, useState } from 'react';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [dark, setDark] = useState(true);

  setColorScheme('dark');

  useEffect(() => {
    if (dark) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  }, [dark, setColorScheme]);

  return (
    <ActionIcon onClick={() => setDark(!dark)} size="md" variant="light">
      {dark ? (
        <IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-6)" />
      ) : (
        <IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-violet-6)" />
      )}
    </ActionIcon>
  );
}
