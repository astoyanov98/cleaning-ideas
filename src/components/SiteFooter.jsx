"use client";

import Link from "next/link";

export default function SiteFooter({ maxWidth = "max-w-7xl" }) {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className={`mx-auto grid ${maxWidth} gap-10 px-6 py-12 md:grid-cols-4`}>
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 font-bold text-white">
              CI
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Cleaning Ideas
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-neutral-600">
            Professional residential and commercial cleaning services you can
            trust.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-secondary">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li>Air duct cleaning</li>
            <li>Dryer vent cleaning</li>
            <li>HVAC maintenance</li>
            <li>Deep home cleaning</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-secondary">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li>
              <Link href="/about" className="hover:text-neutral-900">
                About
              </Link>
            </li>
            <li>Safety &amp; compliance</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-secondary">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li>Email: hello@cleaningideas.com</li>
            <li>Phone: (555) 010-DUCT</li>
            <li>Serving residential &amp; commercial clients</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Cleaning Ideas. All rights reserved.
      </div>
    </footer>
  );
}
