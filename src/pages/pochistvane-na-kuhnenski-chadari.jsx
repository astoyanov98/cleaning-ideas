import ServiceTemplate from "@/components/ServiceTemplate";

const PROCESS_STEPS = [
  {
    image: "/2Chadur/etap_1.jpg",
    title: "Впръскване на активна пяна",
    description: "Върху омазнената повърхност.",
  },
  {
    image: "/2Chadur/etap_2.jpg",
    title: "Молекулно разтваряне",
    description: "/активна фаза/.",
  },
  {
    image: "/2Chadur/etap_3.jpg",
    title: "Изплакване с вода",
    description: "Резултат: Напълно чиста повърхност без мазнини.",
  },
];

const BEFORE_AFTER_ITEMS = [
  { id: "set-1", label: "Комплект 1", image: "/2Chadur/ChadurExample1.jpg" },
  { id: "set-2", label: "Комплект 2", image: "/2Chadur/ChadurExample2.jpg" },
  { id: "set-3", label: "Комплект 3", image: "/2Chadur/ChadurExample3.jpg" },
];

export default function PochistvaneNaKuhnenskiChadariPage() {
  return (
    <ServiceTemplate
      heroImage="/2Chadur/etap_3.jpg"
      heroOverlayClass="bg-black/45"
      heroTitle="Почистване на"
      heroSubtitle="чадъри"
      introTitle="Знаете ли, че чадърът е елементът от Вашата кухненска вентилационна система с най-висок риск от възникване на пожар при наличието на мазнина?"
      introParagraphs={[
        "Ние от Cleaning Ideas знаем как да се справим с този проблем.",
        "Регулярното почистване на Вашия чадър спомага за:",
        "- Намаляване опасността от пожар",
        "- Намаляване риска от замърсяване на храната с микроорганизми /бактерии, гъбички/",
        "- Намаляване нивото на миризми",
        "- Подобряване ефективността на кухненската вентилация",
        "Цялостното почистване на кухненската вентилационна система и регулярната й поддръжка гарантират Вашата сигурност и безопасност!",
      ]}
      processSteps={PROCESS_STEPS}
      beforeAfterTitle="Чадъри преди и след почистване"
      beforeAfterItems={BEFORE_AFTER_ITEMS}
    />
  );
}
