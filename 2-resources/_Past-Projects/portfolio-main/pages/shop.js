import React, { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";
import ProjectCard from "../components/ProjectCard";
import Container from "../components/Container";

const url = "https://joshjacobsonmusic.com/shop";
const title = "Josh Jacobson | Shop";
const description =
  "Sheet music, virtual instruments and merch by Josh Jacobson";

const Music = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  // Load in the Simple Goods script (just once, empty dependency array for componentDidMount behavior)
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app-cdn.simplegoods.co/assets/external/embed-485d19e15c0d820b38f2851a2490d28cacbb489e8ec728bb882843aaf50c14f0.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      SGEmbed.init();
    };
  }, []);

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
              Shop
            </Heading>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Sheet music for select piano compositions available now. Secure
              checkout provided by Stripe, and pdf's are delivered instantly by
              email as soon as your order is placed.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              All future updates (including new versions of sheet music and updated VST/AU plugins) will also be delivered automatically to your email address, as provided during checkout.
               </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Virtual instruments, sample
              packs and other merch coming soon!
              </Text>

            <Heading
              letterSpacing="tight"
              mb={4}
              size="xl"
              fontWeight={700}
              marginTop="30px"
            >
              Return
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Sheet music for "Return", a composition for solo piano originally heard on the ep "First Light". Four pages, pdf format (print or view on your iPad). Fully notated, for all ability levels.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              For beginner pianists and those with smaller hands, I recommend rolling larger chords upward from the bass notes, and using the pedal to your advantage. Enjoy, and feel free to reach out by email for support of any kind while you're learning the music!
            </Text>
            <a
              href="https://app.simplegoods.co/i/IBYKKBPV"
              className="simple-goods-btn"
              style={{
                margin: "20px",
                backgroundColor: "#2ab2fe",
                padding: "12px 34px",
                borderRadius: "3px",
              }}
            >
              Buy 'Return' Sheet Music
            </a>


            <Heading
              letterSpacing="tight"
              mb={4}
              size="xl"
              fontWeight={700}
              marginTop="30px"
            >
              Six Mile Creek
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Piano composition featured on Sonder House Recollections Vol. 5
            </Text>
            <a
              href="#"
              className="simple-goods-btn"
              style={{
                margin: "20px",
                backgroundColor: "#2ab2fe",
                padding: "12px 34px",
                borderRadius: "3px",
              }}
            >
              Coming soon!
            </a>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Music;
