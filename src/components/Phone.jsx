
export default function Phone({ children }) {
    return (
        <>
            <div className="fixed bottom-6 right-6 md:hidden z-50">
                <a
                    href="tel:+359884918067"
                    className="
                        group flex items-center gap-3 rounded-full
                        px-0 py-0 bg-transparent shadow-none
                        backdrop-blur
                        transition-all duration-700 ease-out
                        hover:px-3 hover:py-1 hover:bg-white/90 hover:shadow-lg
                    "
                >
                    {/* ICON */}
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.9.36 1.77.68 2.6a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.57-1.23a2 2 0 0 1 2.11-.45c.83.32 1.7.55 2.6.68A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </div>

                    {/* PHONE NUMBER */}
                    <span
                        className="
                            hidden sm:block
                            whitespace-nowrap text-sm font-semibold text-emerald-700
                            opacity-0 -translate-x-6 max-w-0 overflow-hidden
                            transition-all duration-700 ease-out
                            group-hover:opacity-100 group-hover:translate-x-0 group-hover:max-w-[180px]
                        "
                    >
                        0884918067
                    </span>
                </a>
            </div>

        </>
    );
}
