import { Button, Text, Title } from '@mantine/core';
import classes from './Home.module.css';
import { IconDownload } from '@tabler/icons-react';

export function Home() {
  return (
    <>
      <Text mt={100} ml={150}>
        Hello World, I'm
      </Text>
      <Title className={classes.title} ml={150}>
        <Text inherit component="span" c="deep-red">
          S. Rose Lindauer
        </Text>
      </Title>
      <Text c="dimmed" size="lg" ml={150} maw={580} mx="auto">
        I'm a full stack SW engineer who deploys AIML apps, implements 
        MLOps & DevOps workflows, and loves Open Source principles.
      </Text>
      <Button 
        component="a"
        href="/resume.pdf"
        download="Lindauer_S_Rose_resume.pdf"
        leftSection={<IconDownload size={14} />}
        variant="outline" ml={150} mt={'lg'}>
        Download my resume!
      </Button>
    </>
  );
}
