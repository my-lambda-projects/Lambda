import React from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { useColorMode, Button, Flex, Box, IconButton } from "@chakra-ui/core";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "gray.900",
  };

  const primarytextColor = {
    light: "black",
    dark: "white",
  };

  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <NextLink href="/" passHref>
            <IconButton
            aria-label="jj-logo"
            href="/"
            icon={"jj_circle_logo"}
            className="nav-logo"
            />
        </NextLink>
        <Box>
          <NextLink href="/music" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Original Music
            </Button>
          </NextLink>
          <NextLink href="/scoring" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Film Scoring
            </Button>
          </NextLink>
          <NextLink href="/collaborations" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Collaborations
            </Button>
          </NextLink>
          <NextLink href="/playlists" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Playlists
            </Button>
          </NextLink>
          <NextLink href="/shop" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Shop
            </Button>
          </NextLink>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? "sun" : "moon"}
            onClick={toggleColorMode}
          />
        </Box>
      </StickyNav>
    </>
  );
};

export default Nav;
