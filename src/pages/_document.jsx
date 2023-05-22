import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Hesta</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="favicon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon.png"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
