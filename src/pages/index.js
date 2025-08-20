import Landing from "../components/Landing";

export default function HomePage() {
  return <Landing />;
}

// src/pages/index.js
export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
