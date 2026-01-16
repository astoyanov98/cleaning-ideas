'use client';
import React, { useState } from 'react';

export default function ContactForm({
  id = 'contact',
  className = 'rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl',
}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent('Cleaning Ideas - Запитване за контакт');
    const body = encodeURIComponent(
      `Име: ${name}\nИмейл: ${email}\nТелефон: ${phone}\nСъобщение: ${message}`
    );
    window.location.href = `mailto:office@cleaningideas.bg?subject=${subject}&body=${body}`;
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={className}>
      <div className="grid gap-4">
        <div>
          <label className="text-sm text-neutral-700">Име</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Вашето име"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-700">Имейл</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="ime@primer.bg"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-700">Телефон</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="+359..."
          />
        </div>
        <div>
          <label className="text-sm text-neutral-700">Съобщение</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Опишете вашите нужди"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
        >
          Изпрати съобщение
        </button>
        <p className="text-xs text-neutral-500">
          Ще използваме информацията само за да отговорим на запитването ви.
        </p>
      </div>
    </form>
  );
}
