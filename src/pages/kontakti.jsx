import ContactForm from "../components/ContactForm";
import ContactInfoSection from "../components/ContactInfoSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      <section id="contact-info" className="mx-auto max-w-6xl scroll-mt-24 px-3 py-12 md:scroll-mt-28">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold tracking-tight sm:text-4xl">Свържете се с нас</h1>
            <p className="mt-3 text-sm text-neutral-600">
              Разкажете ни какво трябва да почистим и ще ви върнем бърз отговор.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>Бърза оферта и консултация.</li>
              <li>Гъвкав график за посещение.</li>
              <li>Екип с професионално оборудване.</li>
            </ul>
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <ContactInfoSection />
            </div>
          </div>
          <ContactForm id="contact-form" />
        </div>
      </section>
    </main>
  );
}
