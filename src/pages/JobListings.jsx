import { Box, Container, Heading, VStack, Select, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const JobListings = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">Job Listings</Heading>
        <Box>
          <Select placeholder="Filter by job type">
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </Select>
        </Box>
        <Box>
          <Select placeholder="Filter by location">
            <option value="new-york">New York</option>
            <option value="san-francisco">San Francisco</option>
            <option value="remote">Remote</option>
          </Select>
        </Box>
        <Box>
          <Select placeholder="Filter by company">
            <option value="company-a">Company A</option>
            <option value="company-b">Company B</option>
            <option value="company-c">Company C</option>
          </Select>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Job Title 1</Heading>
            <Text mt={4}>Company A - New York</Text>
            <Button mt={4} as={RouterLink} to="/jobs/1" colorScheme="blue">View Details</Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Job Title 2</Heading>
            <Text mt={4}>Company B - San Francisco</Text>
            <Button mt={4} as={RouterLink} to="/jobs/2" colorScheme="blue">View Details</Button>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default JobListings;