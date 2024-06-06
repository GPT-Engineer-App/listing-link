import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">About Us</Heading>
        <Text>
          JobListing is a platform dedicated to connecting job seekers with their dream jobs. Our mission is to provide a seamless and efficient job search experience.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;