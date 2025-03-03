import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Grid,
  GridItem,
  Stack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

const Visit = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/location-hero')"
        bgSize="cover"
        bgPosition="center"
        h="70vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading fontSize="5xl" fontWeight="bold">
            Visit Trojan Diner & Sports Bar
          </Heading>
          <Text fontSize="xl" maxW="800px">
            Find us in the heart of the city and enjoy delicious food in a lively atmosphere.
          </Text>
        </VStack>
      </Box>

      {/* Location Details */}
      <Container maxW="container.xl" py={16}>
        <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/restaurant-exterior"
            alt="Restaurant Exterior"
            borderRadius="md"
            w={{ base: "100%", md: "50%" }}
            h="300px"
            objectFit="cover"
          />
          <VStack align="start" spacing={4}>
            <Heading fontSize="3xl">Our Location</Heading>
            <HStack>
              <Icon as={FaMapMarkerAlt} color="red.500" boxSize={6} />
              <Text fontSize="lg">
                123 Main Street, Cityville, ST 54321
              </Text>
            </HStack>
            <Text fontSize="lg">
              We are located in the heart of downtown, easily accessible from all major roads and public
              transit. Free parking available!
            </Text>
          </VStack>
        </Stack>
      </Container>

      {/* Embedded Google Map */}
      <Box maxW="container.xl" mx="auto" mb={16} borderRadius="md" overflow="hidden">
        <iframe
          title="Google Maps"
          width="100%"
          height="400px"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=123+Main+Street,Cityville,ST+54321"
        ></iframe>
      </Box>

      {/* Operating Hours */}
      <Container maxW="container.xl" py={16}>
        <Heading textAlign="center" mb={8}>
          Our Hours
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          <GridItem bg="gray.50" p={6} borderRadius="md" shadow="md">
            <Text fontSize="xl" fontWeight="bold">Monday - Thursday</Text>
            <Text fontSize="lg" color="gray.600">11:00 AM - 10:00 PM</Text>
          </GridItem>
          <GridItem bg="gray.50" p={6} borderRadius="md" shadow="md">
            <Text fontSize="xl" fontWeight="bold">Friday - Saturday</Text>
            <Text fontSize="lg" color="gray.600">11:00 AM - 12:00 AM</Text>
          </GridItem>
          <GridItem bg="gray.50" p={6} borderRadius="md" shadow="md">
            <Text fontSize="xl" fontWeight="bold">Sunday</Text>
            <Text fontSize="lg" color="gray.600">12:00 PM - 9:00 PM</Text>
          </GridItem>
        </Grid>
      </Container>

      {/* Contact Information */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={8}>
            Contact Us
          </Heading>
          <VStack spacing={6} align="center">
            <HStack>
              <Icon as={FaPhone} color="teal.500" boxSize={6} />
              <Text fontSize="lg">(123) 456-7890</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="teal.500" boxSize={6} />
              <Text fontSize="lg">info@trojandiner.com</Text>
            </HStack>
            <HStack spacing={6}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Icon as={FaFacebook} boxSize={6} color="blue.600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Icon as={FaInstagram} boxSize={6} color="pink.500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Icon as={FaTwitter} boxSize={6} color="blue.400" />
              </a>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box bg="teal.500" color="white" py={12} textAlign="center">
        <Heading fontSize="3xl">Come Visit Us!</Heading>
        <Text fontSize="lg" mt={2}>
          Book a table now or explore our delicious menu before your visit!
        </Text>
        <HStack justify="center" mt={4} spacing={4}>

          <Button as={Link} to="/menu" colorScheme="whiteAlpha" size="lg">
            View Menu
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Visit;
