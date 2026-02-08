export default function LegacySubscriptionPage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/abonamenti",
      permanent: true,
    },
  };
}
