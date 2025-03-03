import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Grid,
  GridItem,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/dining-experience')"
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
            About Trojan Diner & Sports Bar
          </Heading>
          <Text fontSize="xl" maxW="800px">
            A family-friendly restaurant dedicated to serving great food in a lively atmosphere.
          </Text>
        </VStack>
      </Box>

      {/* Our Story Section */}
      <Container maxW="container.lg" py={16}>
        <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/restaurant-history"
            alt="Our Story"
            borderRadius="md"
            w={{ base: "100%", md: "50%" }}
            h="300px"
            objectFit="cover"
          />
          <VStack align="start" spacing={4}>
            <Heading fontSize="3xl">Our Story</Heading>
            <Text fontSize="lg">
              Trojan Diner & Sports Bar was founded with one mission: to create a dining experience
              that brings families and sports fans together. What started as a small local eatery has
              grown into a beloved establishment known for its welcoming atmosphere, high-quality food,
              and passion for the game.
            </Text>
          </VStack>
        </Stack>
      </Container>

      {/* Meet the Team Section */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={8}>
            Meet Our Team
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {[
              { name: "Chef Marco", role: "Head Chef", img: "chef-marco" },
              { name: "Lisa Thompson", role: "Manager", img: "lisa-manager" },
              { name: "James Carter", role: "Bartender", img: "james-bartender" },
            ].map((teamMember, index) => (
              <GridItem key={index} textAlign="center" p={6} bg="white" borderRadius="md" shadow="md">
                <Image
                  src={`http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/${teamMember.img}`}
                  alt={teamMember.name}
                  borderRadius="full"
                  boxSize="120px"
                  objectFit="cover"
                  mx="auto"
                />
                <Text fontSize="xl" fontWeight="bold" mt={3}>
                  {teamMember.name}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {teamMember.role}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxW="container.xl" py={16}>
        <Heading textAlign="center" mb={8}>
          Why Choose Us?
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {[
            { title: "Fresh Ingredients", img: "fresh-ingredients" },
            { title: "Family Friendly", img: "family-friendly" },
            { title: "Best Sports Experience", img: "sports-experience" },
          ].map((feature, index) => (
            <GridItem key={index} textAlign="center">
              <Image
                src={`http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/${feature.img}`}
                alt={feature.title}
                borderRadius="md"
                w="100%"
                h="250px"
                objectFit="cover"
              />
              <Text fontSize="xl" fontWeight="bold" mt={3}>
                {feature.title}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box bg="teal.500" color="white" py={12} textAlign="center">
        <Heading fontSize="3xl">Visit Us Today!</Heading>
        <Text fontSize="lg" mt={2}>
          Book a table now and experience the best food & sports atmosphere in town!
        </Text>
        <HStack justify="center" mt={4} spacing={4}>
          <Button as={Link} to="/visit" colorScheme="yellow" size="lg">
            Get Directions
          </Button>
          <Button as={Link} to="/menu" colorScheme="whiteAlpha" size="lg">
            View Menu
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default About;
