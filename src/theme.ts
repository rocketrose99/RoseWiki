import { createTheme, type MantineColorsTuple } from '@mantine/core';

const deepRed: MantineColorsTuple = [
  '#ffeaeb',
  '#fcd4d5',
  '#f4a7a8',
  '#ec7779',
  '#e64f50',
  '#e33537',
  '#e22729',
  '#c91a1d',
  '#b41318',
  '#9e0512',
];

export const theme = createTheme({
  colors: {
    'deep-red': deepRed,
  },
  primaryColor: 'deep-red',
  primaryShade: { light: 7, dark: 9 },
});
