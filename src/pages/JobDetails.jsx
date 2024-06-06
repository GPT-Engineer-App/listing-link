import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react";

const JobDetails = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl">
          Software Engineer
        </Heading>
        <Text>Company A - Remote</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </Text>
        <Button colorScheme="blue" size="lg">
          Apply Now
        </Button>
      </VStack>
    </Container>
  );
};

export default JobDetails;