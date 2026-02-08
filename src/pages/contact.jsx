export default function LegacyContactPage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/kontakti",
      permanent: true,
    },
  };
}
