import { Box, Flex, Link, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Flex py={4} px={8} justifyContent={"space-between"} alignItems={"center"}>
        <Stack direction={"row"} spacing={6}>
          <NavLink to="/about">
            <Link>About</Link>
          </NavLink>
          <NavLink to="/contact">
            <Link>Contact</Link>
          </NavLink>
          <NavLink to="/privacy-policy">
            <Link>Privacy Policy</Link>
          </NavLink>
          <NavLink to="/terms-of-service">
            <Link>Terms of Service</Link>
          </NavLink>
        </Stack>
        <Text>© 2023 Financial Times. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;