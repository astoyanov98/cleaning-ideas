import React, { useState } from 'react';

export default function ContactForm({
  id = 'contact',
  className = 'rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl',
}) {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "7ed6d444-4aaa-42d8-b1c3-dcb12de481ad");
      formData.append("subject", "Ново запитване от Cleaning Ideas");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Съобщението е изпратено успешно! Ще се свържем с вас скоро.' });
        event.target.reset();
      } else {
        setStatus({ type: 'error', message: 'Възникна грешка. Моля, опитайте отново.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Възникна грешка. Моля, опитайте отново.' });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={className}>
      <div className="grid gap-4">
        <div>
          <label className="text-sm text-neutral-700">Име</label>
          <input
            type="text"
            name="name"
            required
            disabled={isLoading}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50"
            placeholder="Вашето име"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-700">Имейл</label>
          <input
            type="email"
            name="email"
            required
            disabled={isLoading}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50"
            placeholder="ime@primer.bg"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-700">Телефон</label>
          <input
            type="tel"
            name="phone"
            disabled={isLoading}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50"
            placeholder="+359..."
          />
        </div>
        <div>
          <label className="text-sm text-neutral-700">Съобщение</label>
          <textarea
            name="message"
            required
            rows={4}
            disabled={isLoading}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50"
            placeholder="Опишете вашите нужди"
          />
        </div>
        
        {status.message && (
          <div className={`rounded-xl px-4 py-3 text-sm ${
            status.type === 'success' 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {status.message}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Изпращане...
            </>
          ) : (
            'Изпрати съобщение'
          )}
        </button>
        <p className="text-xs text-neutral-500">
          Ще използваме информацията само за да отговорим на запитването ви.
        </p>
      </div>
    </form>
  );
}
