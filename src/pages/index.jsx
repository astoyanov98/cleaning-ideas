import Head from "next/head";
import Landing from "../components/Landing";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cleaningideas.bg/#organization",
  name: "Професионално почистване на кухненска вентилация - Cleaning Ideas",
  url: "https://cleaningideas.bg/",
  logo: "https://cleaningideas.bg/_next/image?url=%2Flogo.png&w=256&q=75",
  image: "https://cleaningideas.bg/_next/image?url=%2Fimage.jpg&w=640&q=75",
  telephone: "+359884918067",
  email: "office@cleaningideas.bg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Милин камък 41",
    addressLocality: "София",
    postalCode: "1164",
    addressCountry: "BG",
  },
  areaServed: {
    "@type": "Country",
    name: "Bulgaria",
  },
  sameAs: [
    "https://www.facebook.com/people/Cleaning-Ideas/61587934194877/",
    "https://www.instagram.com/cleaningideas25",
  ],
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Почистване на кухненска аспирация | CleaningIdeas.bg</title>
        <meta
          name="description"
          content="Експертно почистване на кухненска аспирация за професионални кухни и хотели. Гарантирана чистота и ефективност от CleaningIdeas.bg. За контакти: 0884918067."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      <Landing />
    </>
  );
}
