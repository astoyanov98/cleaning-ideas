import Image from "next/image";

const plans = [
//   {
//     name: "Основен",
//     price: "$92",
//     cadence: "/mo",
//     description: "Best for small spaces and recurring touch-ups.",
//     features: [
//       { description: "2 пъти месечно пити", included: true },
//       { description: "веднъж месечно чадър", included: false },
//       { description: "веднъж годишни въздуховод", included: false },
//     ],
//   },
  {
    name: "Премиум",
    price: "$281",
    cadence: "/mo",
    description: "Our most popular plan for busy households.",
    features: [
      { description: "2 пъти месечно пити", included: true },
      { description: "веднъж месечно чадър", included: true },
      { description: "веднъж годишни въздуховод", included: false },
      { description: "веднъж годишни мотор", included: false },
    ],
    highlight: true,
  },  {
    name: "Ултра",
    price: "$522",
    cadence: "/mo",
    description: "For homes that want weekly sparkle.",
    features: [
      { description: "2 пъти месечно пити", included: true },
      { description: "веднъж месечно чадър", included: true },
      { description: "веднъж годишни въздуховод", included: true },
      { description: "веднъж годишни мотор", included: true },
    ],
  },
  {
    name: "Професионален",
    price: "$419",
    cadence: "/mo",
    description: "For homes that want weekly sparkle.",
    features: [
      { description: "2 пъти месечно пити", included: true },
      { description: "веднъж месечно чадър", included: true },
      { description: "веднъж годишни въздуховод", included: true },
      { description: "веднъж годишни мотор", included: false },
    ],
  },

];

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Choose your plan</h2>
          <p className="mt-2 text-neutral-600">
            Switch plans anytime. Every subscription includes a satisfaction guarantee.
          </p>
        </div>

        <div className="mx-auto flex flex-wrap justify-center items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={[
                "border text-lg text-center hover:cursor-pointer border-neutral-200 rounded-2xl shadow-sm transition-transform duration-200 hover:shadow-md",
                "flex h-full w-[280px] flex-col px-12 py-6 min-h-[430px]",
                index === 1
                  ? "z-20 bg-linear-to-br from-sky-50 via-sky-100 to-purple-100 scale-[1.08] hover:scale-[1.1]"
                  : "z-0 bg-white hover:scale-[1.03]",
              ].join(" ")}
            >
              <Image src="/airduct.png" alt="Air duct" width={96} height={96} className="mx-auto" />

              <div className="font-bold mb-4 mt-3">{plan.name}</div>

              <div className="font-semibold leading-none">
                <span className="block">{plan.price}</span>
                <span className="block text-sm font-normal">per month</span>
              </div>

              {/* CHANGE: let this section grow so all cards align heights */}
              <ul className="mt-5 flex-1 space-y-3 text-sm text-neutral-700 text-left">
                {plan.features.map((feature) => (
                  <li key={feature.description} className="flex items-start gap-2">
                    {/* CHANGE: fixed-size, non-shrinking circle so it never squashes */}
                    <span
                      className={[
                        "inline-flex size-6 shrink-0 items-center justify-center rounded-full",
                        feature.included ? "bg-sky-500" : "bg-red-500",
                      ].join(" ")}
                    >
                      {feature.included ? (
                        <svg
                          className="size-3.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="size-3.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </span>

                    <span className="text-left leading-snug">{feature.description}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
