import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta
          name="google-site-verification"
          content="gwgHS__jw-RQB-1RQzKjGQtvzKeFejcrMLnGYGlNwhU"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QJDF9JZS0H"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QJDF9JZS0H');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
