import { Group, Text, Title } from "@mantine/core";
import { IconLeaf } from "@tabler/icons-react";


export function About() {
  return (
    <>
      <Title ml={50} mt={50}>About</Title>
      <Group ml={50} mt={20}>
        <IconLeaf />
        <Text> Work in progress</Text>
      </Group>
    </>
  );
}
