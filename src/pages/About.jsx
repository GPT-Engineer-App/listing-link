import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl">
          About Us
        </Heading>
        <Text>
          JobFinder is a leading job search platform dedicated to connecting job seekers with their dream jobs. Our mission is to make the job search process as seamless and efficient as possible.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;