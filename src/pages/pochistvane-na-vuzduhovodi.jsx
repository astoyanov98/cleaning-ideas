import ServiceTemplate from "@/components/ServiceTemplate";

const PROCESS_STEPS = [
  {
    image: "/3Vents/etap_1.png",
    title: "Подготовка и нанасяне на активен препарат",
    description:
      "Проверка и инспекция на вида омазнена повърхност и избор начин на почистване.",
  },
  {
    image: "/3Vents/etap_2.png",
    title: "Дълбоко обезмасляване в работна фаза",
    description:
      "Препаратът работи в дълбочина и отделя полепите наслоявания, без да уврежда въздуховодната система.",
  },
  {
    image: "/3Vents/etap_3.png",
    title: "Финално изплакване и проверка",
    description:
      "Изплакваме и отстраняваме остатъците, след което проверяваме за чист и безопасен въздушен поток.",
  },
];

const BEFORE_AFTER_ITEMS = [
  { id: "set-1", label: "Комплект 1", image: "/3Vents/VentsExample1.png" },
  { id: "set-2", label: "Комплект 2", image: "/3Vents/VentsExample2.jpg" },
  { id: "set-3", label: "Комплект 3", image: "/3Vents/VentsExample3.png" },
];

export default function PochistvaneNaVuzduhovodiPage() {
  return (
    <ServiceTemplate
      heroImage="/3Vents/main.png"
      heroOverlayClass="bg-black/45"
      heroTitle="Почистване на"
      heroSubtitle="въздуховоди"
      introTitle="Защо трябва да се почистват въздуховодите?"
      introParagraphs={[
        "- За да сме сигурни, че НЯМА никакъв риск от пожар",
        "- По-висока ефективност на кухненската вентилация",
        "- Намаляване нивото на лоши миризми",
      ]}
      processSteps={PROCESS_STEPS}
      beforeAfterTitle="Въздуховоди преди и след почистване"
      beforeAfterItems={BEFORE_AFTER_ITEMS}
    />
  );
}
