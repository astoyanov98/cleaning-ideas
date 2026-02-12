export default function LegacyPochisteneMotoriPage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/pochistvane-na-motori",
      permanent: true,
    },
  };
}
