import { Box, Container, Heading, VStack, Select, SimpleGrid, Text, Button } from "@chakra-ui/react";

const JobListings = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl">
          Job Listings
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          <Select placeholder="Job Type">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </Select>
          <Select placeholder="Location">
            <option>Remote</option>
            <option>On-site</option>
          </Select>
          <Select placeholder="Company">
            <option>Company A</option>
            <option>Company B</option>
          </Select>
        </SimpleGrid>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Heading as="h2" size="md">
            Software Engineer
          </Heading>
          <Text>Company A - Remote</Text>
          <Button colorScheme="blue" mt={2}>
            View Details
          </Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Heading as="h2" size="md">
            Product Manager
          </Heading>
          <Text>Company B - On-site</Text>
          <Button colorScheme="blue" mt={2}>
            View Details
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default JobListings;