import ServiceTemplate from "@/components/ServiceTemplate";

const PROCESS_STEPS = [
  {
    image: "/FilterCleaningExp1.png",
    title: "Излъчване на UV-вълни (над 20kHz)",
    description:
      "UV-вълните създават редуване на ниско и високо налягане в разтвора.",
  },
  {
    image: "/FilterCleaningExp2.png",
    title: "Образуване на малки балончета",
    description:
      "Поради ниското налягане се образуват малки балончета в течността.",
  },
  {
    image: "/FilterCleaningExp3.png",
    title: "Балончета се спукват (експлодират)",
    description:
      "При по-високото налягане балончетата се спукват и така почистват в дълбочина омазнените предмети (филтри).",
  },
];

const BEFORE_AFTER_ITEMS = [
  { id: "set-1", label: "Комплект 1", image: "/razlikafiltri.png" },
  { id: "set-2", label: "Комплект 2", image: "/razlikafiltri2.png" },
  { id: "set-3", label: "Комплект 3", image: "/razlikafiltri3.png" },
];

export default function PochistvaneNaFiltriSUltrazvukPage() {
  return (
    <ServiceTemplate
      heroImage="/Filtri_Tritle_Foto.png"
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
