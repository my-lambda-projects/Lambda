import React from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Box,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/core";

import Container from "../components/Container";

const url = "https://joshjacobsonmusic.com/playlists";
const title = "Josh Jacobson | Playlists";

const Playlists = () => {
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
              Playlists
            </Heading>
            <SimpleGrid columns={{sm:1, md:2}} spacing={10}>
              <Box>
                <Text color={secondaryTextColor[colorMode]} mb={4}>
                  Future Soul
                </Text>
                <iframe
                    src="https://open.spotify.com/embed/playlist/5Q3RDgmqchjN1h2vzx8xWw"
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
              </Box>
              <Box>
                <Text color={secondaryTextColor[colorMode]} mb={4}>
                  beautiful piano music
                </Text>
                <iframe
                  src="https://open.spotify.com/embed/playlist/2T2SbLaLSllGzhdcQMbyTW"
                  width="300"
                  height="380"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </Box>
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Playlists;
