export const plans = [
  {
    name: "Start",
    subtitle: "Почистване на филтри",
    color: "#5354ae",
    hoverIcons: { flames: 3, shields: 1 },
    riskPercent: 75,
    footer: ["*За почистване до 8 филтри", "цената е крайна с ДДС"],
    offers: [
      {
        items: [{ icon: "/pita.png", alt: "Filter", label: "2 пъти месечно" }],
        price: "€95",
      },
      {
        items: [{ icon: "/pita.png", alt: "Filter", label: "4 пъти месечно" }],
        price: "€180",
      },
    ],
  },
  {
    name: "Advance",
    subtitle: "Почистване на филтри и чадъри",
    color: "#3bb88f",
    hoverIcons: { flames: 2, shields: 2 },
    riskPercent: 50,
    footer: ["*За почистване до 1 чадър и до 8 филтри", "цената е крайна с ДДС"],
    offers: [
      {
        items: [
          { icon: "/pita.png", alt: "Filter", label: "2 пъти месечно" },
          { icon: "/chadur.png", alt: "Umbrella", label: "веднъж месечно" },
        ],
        price: "€285",
      },
      {
        items: [
          { icon: "/pita.png", alt: "Filter", label: "4 пъти месечно" },
          { icon: "/chadur.png", alt: "Umbrella", label: "веднъж месечно" },
        ],
        price: "€360",
      },
    ],
  },
  {
    name: "Expert",
    subtitle: "Почистване на филтри, чадъри и мотори",
    color: "#235c74",
    hoverIcons: { flames: 1, shields: 3 },
    riskPercent: 25,
    footer: ["*За почистване до 1 мотор, до 1 чадър, до 8 филтри", "цената е крайна с ДДС"],
    offers: [
      {
        items: [
          { icon: "/pita.png", alt: "Filter", label: "2 пъти месечно" },
          { icon: "/chadur.png", alt: "Umbrella", label: "веднъж на 2 месеца" },
          { icon: "/motor.png", alt: "Motor", label: "веднъж годишно" },
        ],
        price: "€365",
      },
      {
        items: [
          { icon: "/pita.png", alt: "Filter", label: "4 пъти месечно" },
          { icon: "/chadur.png", alt: "Umbrella", label: "веднъж месечно" },
          { icon: "/motor.png", alt: "Motor", label: "веднъж годишно" },
        ],
        price: "€420",
      },
    ],
  },
  {
    name: "Total Care",
    subtitle: "Почистване на филтри, чадъри, мотори и въздуховоди",
    color: "#f68426",
    hoverIcons: { flames: 0, shields: 4 },
    riskPercent: 0,
    riskLabel: "Пълна защита",
    riskColor: "text-emerald-500",
    footer: [
      "*За почистване до 1 въздуховод, до 1 мотор, до 1 чадър, до 8 филтри",
      "цената е крайна с ДДС",
    ],
    offers: [
      {
        items: [
          { icon: "/pita.png", alt: "Filter", label: "4 пъти месечно" },
          { icon: "/chadur.png", alt: "Umbrella", label: "веднъж месечно" },
          { icon: "/motor.png", alt: "Motor", label: "2 пъти годишно" },
          { icon: "/airduct.png", alt: "Air duct", label: "веднъж годишно" },
        ],
        price: "€530",
      },
    ],
  },
];
