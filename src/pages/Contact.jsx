import { Box, Container, Heading, Input, Textarea, VStack, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl">
          Contact Us
        </Heading>
        <Input placeholder="Your Name" size="lg" />
        <Input placeholder="Your Email" size="lg" />
        <Textarea placeholder="Your Message" size="lg" />
        <Button colorScheme="blue" size="lg">
          Send Message
        </Button>
      </VStack>
    </Container>
  );
};

export default Contact;