import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-grayscale300 dark:bg-grayscale-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
