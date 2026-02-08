export default function LegacyAboutPage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/za-nas",
      permanent: true,
    },
  };
}
