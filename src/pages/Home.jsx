import { Box, Container, Heading, Input, VStack, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to JobFinder
        </Heading>
        <Heading as="h2" size="md" textAlign="center">
          Find your dream job today
        </Heading>
        <Input placeholder="Search for jobs..." size="lg" />
        <Button colorScheme="blue" size="lg">
          Search
        </Button>
      </VStack>
    </Container>
  );
};

export default Home;