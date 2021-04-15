import React, { useEffect } from "react";
import { Global, css } from "@emotion/core";
import { DefaultSeo } from "next-seo";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core";
import Router from "next/router";
import * as Fathom from "fathom-client";

import theme from "../styles/theme";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import SEO from "../next-seo.config";
import "../styles/styles.scss";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

Router.events.on("routeChangeComplete", () => {
  Fathom.trackPageview();
});

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ["joshjacobsonmusic.com"],
      });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <GlobalStyle>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
