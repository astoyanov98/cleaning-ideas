import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Свържете се с нас</h1>
            <p className="mt-3 text-sm text-neutral-600">
              Разкажете ни какво трябва да почистим и ще ви върнем бърз отговор.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>Бърза оферта и консултация.</li>
              <li>Гъвкав график за посещение.</li>
              <li>Екип с професионално оборудване.</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
