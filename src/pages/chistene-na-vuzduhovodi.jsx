export default function LegacyPochisteneVuzduhovodiPage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/pochistvane-na-vuzduhovodi",
      permanent: true,
    },
  };
}
