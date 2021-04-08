import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/core';

const spotifyFollow = '<iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3KpCBwmIHMdBD3GzV1xNtE&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>'

const iframe =  () => {
  return {
    __html: spotifyFollow
  }
};

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link
        href="https://www.instagram.com/joshjacobsongs/"
        title="Instagram"
        icon="instagram"
        isExternal
      >
        <IconButton
          aria-label="Instagram"
          icon="instagram"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.youtube.com/joshjacobsongs"
        title="YouTube"
        isExternal
      >
        <IconButton
          aria-label="YouTube"
          icon="youtube"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:joshjacobsonmusic@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <div dangerouslySetInnerHTML={ iframe() } />
    </div>
  </Flex>
);

export default Footer;
