import React from "react";
import NextLink from "next/link";
import { useColorMode, Button, Flex, Box, IconButton } from "@chakra-ui/core";
import styled from "@emotion/styled";
import Nav from "./Nav";

import Footer from "./Footer";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "gray.900",
  };
  const primarytextColor = {
    light: "black",
    dark: "white",
  };

  return (
    <>
      <Nav />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
