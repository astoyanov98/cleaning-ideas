import Landing from "../components/Landing";

export default function HomePage() {
  return <Landing />;
}

// src/pages/index.js
export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
