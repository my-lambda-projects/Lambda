import React from "react";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/core";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
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
            Hi, I’m Josh.
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I compose music and tell stories with harmony, melody, and soundscapes.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            About
          </Heading>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            I grew up in Ithaca, NY as part of a musical family, starting piano lessons at five and learning several instruments before moving into composition and electronic production. I'm now based in Los Angeles, but the sound and feeling of upstate NY, the quiet forests, serene gorges and lakes, still resonate distinctly through all of my music.
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            My favorite color is blue. I love being outside and can usually be found skiing, surfing, or hugging a tree somewhere when I'm not in the studio.
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            In a scoring context, I endeavor to bring an intuitive feel and thoughtful minimalism to every project, collaborating closely with the director to bring their vision to life. Having worked extensively as a session player, producer, songwriter, music director and touring keyboardist, I'm now increasingly focused on scoring original films and series. If you have a project coming up and think my music could be a good fit, I'd love to hear from you.
          </Text>




        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Recent Projects
          </Heading>
          <ProjectCard
            title="time lost but not forgotten"
            description="cinematic ambient album, with compositions for piano & strings"
            href="https://open.spotify.com/album/5NeswvVgX7jAOHYe2Dhn50?si=9GEbEzVvSUyp7nEQvUsSXg"
            image="/time_lost_200.jpg"
          />
          <ProjectCard
            title="OCEANS"
            description="Debut album, featuring collaborations with Carmody and Monogem"
            href="https://open.spotify.com/album/4bAI6GPtSBaS9W1RrSocPk?si=iJCvIJdtSFGBqRmqjOeZzg"
            image="/oceans_200.jpg"
          />
          <ProjectCard
            title="Juniper Drive"
            description="Treman piano single featured on Spotify's Classical New Releases playlist"
            href="https://open.spotify.com/track/5TqnYnaHDJpQnnt2zWzTiP?si=KOESEHG0Rh-_X7znfuCBLQ"
            image="/juniper_200.jpg"
          />
          <ProjectCard
            title="Ty's List"
            description="Original music for an award-winning documentary film shown at Manhattan Film Festival and Beloit Film Festival"
            href="http://www.tyslist-themovie.com/"
            image="/tys_list_200.jpg"
          />

        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
