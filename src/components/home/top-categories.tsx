import Link from "next/link";
import { Atom, Baby, Landmark, Sparkles } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    name: "Fiction",
    text: "Novels and short stories",
    tint: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Atom,
    name: "Science",
    text: "How the world works",
    tint: "bg-sky-50 text-sky-600",
  },
  {
    icon: Landmark,
    name: "History",
    text: "Stories from the past",
    tint: "bg-amber-50 text-amber-600",
  },
  {
    icon: Baby,
    name: "Kids",
    text: "Picture books and more",
    tint: "bg-rose-50 text-rose-600",
  },
];

export function TopCategories() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
          Top categories
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Pick a shelf and start reading
        </h2>
        <p className="mt-3 text-slate-500">
          Four shelves, one for every kind of reader.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/all-books?category=${category.name.toLowerCase()}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100"
          >
            <span
              className={`mx-auto flex size-12 items-center justify-center rounded-xl ${category.tint}`}
            >
              <category.icon className="size-6" />
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">
              {category.name}
            </h3>
            <p className="mt-1 text-xs text-slate-400">{category.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
