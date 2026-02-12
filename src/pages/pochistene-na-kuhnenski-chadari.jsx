export default function LegacyPochisteneChadariPage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/pochistvane-na-kuhnenski-chadari",
      permanent: true,
    },
  };
}
