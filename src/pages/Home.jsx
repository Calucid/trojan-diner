import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/trojan-diner/restaurant-interior')"
        bgSize="cover"
        bgPos="center"
        h={{ base: "70vh", md: "90vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
      >
        <VStack spacing={6} bg="rgba(0, 0, 0, 0.6)" p={6} borderRadius="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>Welcome to Trojan Diner & Sports Bar</Heading>
          <Text fontSize={{ base: "md", md: "xl" }}>A family-friendly restaurant offering a wide variety of delicious food.</Text>
          <Button as={Link} to="/menu" colorScheme="red" size="lg">
            View Menu
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Container maxW="container.xl" py={16}>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/trojan-diner/chef-cooking"
            alt="Chef Cooking"
            borderRadius="md"
            boxSize={{ base: "100%", md: "50%" }}
          />
          <VStack align="start" spacing={4}>
            <Heading fontSize="3xl">About Us</Heading>
            <Text fontSize="lg">
              At Trojan Diner & Sports Bar, we pride ourselves on serving high-quality meals in a welcoming atmosphere. Whether you're here for a family dinner or to catch the big game, we've got something for everyone.
            </Text>
            <Button as={Link} to="/about" colorScheme="red">
              Learn More
            </Button>
          </VStack>
        </Stack>
      </Container>

      {/* Featured Dishes */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={10}>
            Featured Dishes
          </Heading>
          <Flex wrap="wrap" justify="center" gap={6}>
            {["burger", "steak", "pasta", "salad"].map((dish) => (
              <Box key={dish} bg="white" borderRadius="md" overflow="hidden" boxShadow="md" maxW="300px">
                <Image src={`http://stock.calucid.com/fetch/calucid/trojan-diner/${dish}`} alt={dish} />
                <Box p={4}>
                  <Heading fontSize="xl" mb={2} textTransform="capitalize">
                    {dish}
                  </Heading>
                  <Text>Delicious and freshly prepared {dish} to satisfy your cravings.</Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.xl" py={16} textAlign="center">
        <Heading mb={6}>Visit Us</Heading>
        <Text fontSize="lg" mb={4}>
          123 Main Street, Your City, Your State
        </Text>
        <Text fontSize="lg" mb={6}>
          Call us: (123) 456-7890
        </Text>
        <Button as={Link} to="/contact" colorScheme="red">
          Get Directions
        </Button>
      </Container>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={6}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} Trojan Diner & Sports Bar. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" icon={<FaFacebook />} aria-label="Facebook" variant="ghost" color="white" />
              <IconButton as="a" href="#" icon={<FaInstagram />} aria-label="Instagram" variant="ghost" color="white" />
              <IconButton as="a" href="#" icon={<FaTwitter />} aria-label="Twitter" variant="ghost" color="white" />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;