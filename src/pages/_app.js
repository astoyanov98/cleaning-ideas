import "../styles/globals.css";
import dynamic from "next/dynamic";

// Support both next-intl providers (Pages/App) & avoid undefined export issues
const IntlProvider = dynamic(
  () =>
    import("next-intl").then(
      (m) => m.NextIntlProvider || m.NextIntlClientProvider || m.default
    ),
  { ssr: false }
);

// src/pages/_app.js
export default function MyApp({ Component, pageProps }) {
  const { messages = {}, locale = "en" } = pageProps || {};
  return (
    <IntlProvider messages={messages} locale={locale} now={new Date()}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
