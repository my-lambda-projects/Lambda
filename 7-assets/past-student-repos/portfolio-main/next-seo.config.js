const title = "Josh Jacobson";
const description = "Josh Jacobson | Film Composer, Producer and Singer";

const SEO = {
  title,
  description,
  canonical: "https://joshjacobsonmusic.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://joshjacobsonmusic.com",
    title,
    description,
    images: [
      {
        url: "https://joshjacobsonmusic.com/static/images/og.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
