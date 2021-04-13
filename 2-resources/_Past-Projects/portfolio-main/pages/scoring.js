import React from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
} from "@chakra-ui/core";

import Container from "../components/Container";

const url = "https://joshjacobsonmusic.com/scoring";
const title = "Film Scoring | Josh Jacobson";
const description = "Film Scoring";

const Scoring = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: "https://joshjacobsonmusic.com/static/images/dashboard.jpg",
              alt: description,
              width: 1280,
              height: 720,
            },
          ],
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
              Film Scoring
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>Reel below</Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}></SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}></SimpleGrid>
          </Flex>
          <Heading letterSpacing="tight" as="h2" size="xl">
            Reel
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I compose original music for film and TV. My music is also available
            for sync and licensing, with my catalog represented by Silver Lake
            Songs, Musicbed and Music Vine.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Scoring;
