import { Box, Container, Heading, Input, VStack, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to JobListing</Heading>
        <Box width="100%">
          <Input placeholder="Search for jobs..." size="lg" />
          <Button mt={2} colorScheme="blue" width="100%">Search</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;