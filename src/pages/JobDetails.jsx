import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react";

const JobDetails = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">Job Title 1</Heading>
        <Text>Company A - New York</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </Text>
        <Button colorScheme="blue">Apply Now</Button>
      </VStack>
    </Container>
  );
};

export default JobDetails;