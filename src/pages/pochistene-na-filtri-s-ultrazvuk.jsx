export default function LegacyPochisteneFiltriPage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/pochistvane-na-filtri-s-ultrazvuk",
      permanent: true,
    },
  };
}
