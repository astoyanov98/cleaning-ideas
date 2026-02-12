import ServiceTemplate from "@/components/ServiceTemplate";

const PROCESS_STEPS = [
  {
    image: "/4fans/etap_1.png",
    title: "Нанасяне на активен обезмаслител",
    description:
      "Третираме внимателно замърсените зони, за да започне разтварянето на наслоената мазнина.",
  },
  {
    image: "/4fans/etap_2.png",
    title: "Работна фаза и дълбоко почистване",
    description:
      "Препаратът работи в дълбочина и освобождава механичните части от натрупаните замърсявания.",
  },
  {
    image: "/4fans/etap_3.png",
    title: "Изплакване и финален контрол",
    description:
      "След изплакване правим проверка за чист мотор и стабилна работа на системата.",
  },
];

const BEFORE_AFTER_ITEMS = [
  { id: "set-1", label: "Комплект 1", image: "/4fans/motorirazlika.png" },
  { id: "set-2", label: "Комплект 2", image: "/4fans/motorrazlika2.png" },
  { id: "set-3", label: "Комплект 3", image: "/4fans/motorirazlika.png" },
];

export default function PochistvaneNaMotoriPage() {
  return (
    <ServiceTemplate
      heroImage="/4fans/etap_3.png"
      heroOverlayClass="bg-black/45"
      heroTitle="Почистване на"
      heroSubtitle="мотори"
      introTitle="Защо трябва да се почиства моторът /двигателят/?"
      introParagraphs={[
        "- Намаляване риска от пожар",
        "- Увеличаване производителността му при премахване на наслоената мазнина",
        "- Намаляване нивото на лоши миризми",
        "- Намаляване разходите за електричество",
        "- Удължаване живота му",
        "Ние от Cleaning Ideas знаем как. Доверете ни се!",
      ]}
      processSteps={PROCESS_STEPS}
      beforeAfterTitle="Мотори преди и след почистване"
      beforeAfterItems={BEFORE_AFTER_ITEMS}
    />
  );
}
