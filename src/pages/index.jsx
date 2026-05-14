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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Професионално почистване на аспирация",
  description:
    "Професионално почистване на кухненски аспирации и вентилации за ресторанти от CleaningIdeas.bg. Осигурете пожарна безопасност и хигиена. Тел: 0884918067.",
  provider: {
    "@type": "Organization",
    "@id": "https://cleaningideas.bg/#organization",
  },
  areaServed: {
    "@type": "City",
    name: "София",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Колко често трябва да се извършва почистване на кухненската вентилация?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Честотата зависи от интензивността на готвене и вида на използваните мазнини. За ресторанти с голямо натоварване (скари, фритюрници) се препоръчва пълно почистване на всеки 3 до 6 месеца. За по-малко натоварени обекти, веднъж годишно обикновено е достатъчно. Редовната поддръжка е ключът към избягване на пожарни инциденти.",
      },
    },
    {
      "@type": "Question",
      name: "Издавате ли сертификат за извършеното почистване?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, след всяко професионално почистване на кухненска аспирация издаваме протокол/сертификат за извършена дейност. Този документ е необходим за пред органите по „Пожарна безопасност и защита на населението“ (ПБЗН) и РЗИ, като доказва, че обектът отговаря на изискванията за експлоатация.",
      },
    },
    {
      "@type": "Question",
      name: "Необходимо ли е да затварям ресторанта по време на процедурата?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Не е задължително. Ние предлагаме гъвкаво работно време, като извършваме почистването в часове, когато кухнята не работи (през нощта или рано сутрин). Целта ни е да не пречим на вашия работен процес и да подготвим обекта за следващата смяна.",
      },
    },
  ],
};

const ratingSchema = {
  "@context": "http://schema.org/",
  "@type": "Product",
  name: "Професионално почистване на кухненска аспирация",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
    reviewCount: "65",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
        />
      </Head>
      <Landing />
    </>
  );
}
