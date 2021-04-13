import React from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/core";

import Container from "../components/Container";

const url = "https://joshjacobsonmusic.com/about";
const title = "Josh Jacobson | Collaborations";

const Collaborations = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Collaborations
            </Heading>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Live
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Touring keyboardist for Banks, Delacey, Full Crate, Corey Harper
              and more. Recent live string arrangements, music direction & Ableton programming for artists including Zeke Finn, Phantogram, Sofia Carson, and Biako. 
              
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              As a music director, I love building live shows from the ground up and helping artists achieve their vision. I specialize in creative live arrangements, orchestration, Ableton programming and virtual instrument design.
            </Text>

            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Studio
            </Heading>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I've produced, played keys, or co-written on songs by Carmody, India Carney, Raelee Nikole, Ley Line, Black Gatsby, 
              Lizzy McAlpine, BAYNK, Gigamesh, and many more. Have a listen below!
            </Text>

            <iframe
              src="https://open.spotify.com/embed/playlist/4AYGAq5C2Fed6qIssfiL13"
              width="300"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Collaborations;
