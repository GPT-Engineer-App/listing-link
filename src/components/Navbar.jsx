import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          JobFinder
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/jobs" px={2}>
            Job Listings
          </Link>
          <Link as={RouterLink} to="/about" px={2}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" px={2}>
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;