import ServiceTemplate from "@/components/ServiceTemplate";

const PROCESS_STEPS = [
  {
    image: "/FilterCleaningExp1.jpg",
    title: "Излъчване на UV-вълни (над 20kHz)",
    description:
      "UV-вълните създават редуване на ниско и високо налягане в разтвора.",
  },
  {
    image: "/FilterCleaningExp2.jpg",
    title: "Образуване на малки балончета",
    description:
      "Поради ниското налягане се образуват малки балончета в течността.",
  },
  {
    image: "/FilterCleaningExp3.jpg",
    title: "Балончета се спукват (експлодират)",
    description:
      "При по-високото налягане балончетата се спукват и така почистват в дълбочина омазнените предмети (филтри).",
  },
];

const BEFORE_AFTER_ITEMS = [
  { id: "set-1", label: "Комплект 1", image: "/razlikafiltri.jpg" },
  { id: "set-2", label: "Комплект 2", image: "/razlikafiltri2.jpg" },
  { id: "set-3", label: "Комплект 3", image: "/razlikafiltri3.jpg" },
];

export default function PochistvaneNaFiltriSUltrazvukPage() {
  return (
    <ServiceTemplate
      heroImage="/Filtri_Tritle_Foto.jpg"
      heroTitle="Почистване на филтри"
      heroSubtitle="с ултразвук"
      introTitle="Защо да почистваме филтрите с ултразвук вместо да ги почистваме с химически препарати като сода каустик (NAOH) например?"
      introParagraphs={[
        "- Заради кавитацията.",
        "- Какво е кавитация?",
        "- Кавитацията е процес, при който в течност се образуват малки балончета (мехурчета) от пара/газ, които буквално «експлодират» в повърхността на омазнения предмет (филтър). По този начин се почиства в дълбочина и се стига до най-недостъпните зони.",
      ]}
      processSteps={PROCESS_STEPS}
      beforeAfterTitle="Филтри преди и след почистване"
      beforeAfterItems={BEFORE_AFTER_ITEMS}
    />
  );
}
