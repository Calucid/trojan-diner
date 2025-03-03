import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      name: formData.name.trim() === "",
      email: !/\S+@\S+\.\S+/.test(formData.email),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/contact-hero')"
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
            Get in Touch
          </Heading>
          <Text fontSize="xl" maxW="800px">
            Have a question? Want to make a reservation? Reach out to us, and we'll be happy to help!
          </Text>
        </VStack>
      </Box>

      {/* Contact Information */}
      <Container maxW="container.lg" py={16}>
        <Heading textAlign="center" mb={8}>
          Contact Information
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

      {/* Contact Form */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.md">
          <Heading textAlign="center" mb={8}>
            Send Us a Message
          </Heading>
          <Box bg="white" p={8} borderRadius="md" shadow="md">
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isInvalid={errors.name}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormErrorMessage>Name is required.</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <FormErrorMessage>Enter a valid email address.</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.message}>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <FormErrorMessage>Message cannot be empty.</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="teal" size="lg" w="full">
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box bg="teal.500" color="white" py={12} textAlign="center">
        <Heading fontSize="3xl">We'd Love to Hear from You!</Heading>
        <Text fontSize="lg" mt={2}>
          Whether you have questions, feedback, or just want to say hi, we're here for you.
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

export default Contact;
