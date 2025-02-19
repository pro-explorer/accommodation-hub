import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags  */}
        <meta
          name="title"
          content="Accommodation Hub - A comprehensive platform for student accommodation needs"
        />
        <meta
          name="description"
          content="Find safe and verified off-campus accommodation for students, with features including listings, reviews, and seamless communication."
        />
        <meta
          name="keywords"
          content="accommodation, student housing, Harare Institute of Technology, off-campus housing, rental listings, reviews"
        />
        <meta name="robots" content="index, follow" />
        <meta content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Pro" />

        <meta
          name="google-site-verification"
          content="sZPmFgCCG9yDDjVqCsdembcfkOLDihLkjCWdXkxnEVI"
        />
        <meta name="msvalidate.01" content="100EE9C6C0FC17AF45101A46F9363D0C" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content="Accommodation Hub - Comprehensive platform for student accommodation needs"
        />
        <meta
          property="og:site_name"
          content="Accommodation Hub - Comprehensive platform for student accommodation needs"
        />
        <meta
          property="og:url"
          content="https://accommodation-hub.vercel.app/"
        />
        <meta
          property="og:description"
          content="A platform to find safe and verified off-campus accommodation for students. Includes listings, reviews, and seamless communication with landlords."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dho0rpn5a/image/upload/v1692935077/samples/travello_template.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://travello-template.vercel.app"
        />
        <meta
          name="twitter:title"
          content="Accommodation Hub - Comprehensive platform for student accommodation needs"
        />
        <meta
          name="twitter:description"
          content="Find safe and verified off-campus accommodation for students, with features including listings, reviews, and seamless communication."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dho0rpn5a/image/upload/v1692935077/samples/travello_template.png"
        />

        <meta name="pinterest-rich-pin" content="true" />
        <meta
          name="pinterest:title"
          content="Accommodation Hub - Comprehensive platform for student accommodation needs"
        />
        <meta
          name="pinterest:description"
          content="A platform to find safe and verified off-campus accommodation for students. Includes listings, reviews, and seamless communication with landlords."
        />
        <meta
          name="pinterest:image"
          content="https://res.cloudinary.com/dho0rpn5a/image/upload/v1692935077/samples/travello_template.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
