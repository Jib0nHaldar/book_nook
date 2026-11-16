import Link from "next/link";
import { ArrowRight, BookCheck, RotateCcw, Search } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a book",
    text: "Search the shared shelf by title, author, or category and open the one that catches your eye.",
  },
  {
    icon: BookCheck,
    title: "Borrow it",
    text: "One click and the book is yours for the next seven days — no card, no queue, no fees.",
  },
  {
    icon: RotateCcw,
    title: "Return it",
    text: "Finished early? Send it back from My Borrows with a single click so the next reader can start.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
          Simple by design
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          How Borrowing Works
        </h2>
        <p className="mt-3 text-slate-500">
          Three steps from shelf to nightstand. No library card needed.
        </p>
      </div>

      <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {/* dashed connector behind the step badges (desktop only) */}
        <div className="absolute left-[16%] right-[16%] top-5 hidden border-t-2 border-dashed border-indigo-200 md:block" />

        {steps.map((step, index) => (
          <div key={step.title} className="relative text-center md:text-left">
            <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <div className="mt-5 flex items-start justify-center gap-3 md:justify-start">
              <step.icon className="size-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/all-books"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Start browsing <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
