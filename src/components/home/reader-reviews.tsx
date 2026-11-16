import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I found a novel I had been hunting for months and had it on my nightstand the same evening. Returning it took literally one click.",
    name: "Ayesha R.",
    meta: "Borrowed 14 books",
    initials: "AR",
  },
  {
    quote:
      "BookNook feels like the little library my street always needed. The seven-day window is exactly the push I need to finish a book.",
    name: "Tanvir H.",
    meta: "Reader since 2024",
    initials: "TH",
  },
  {
    quote:
      "I added a few of my own books to the shelf last month and three neighbours have already borrowed them. I love the exchange.",
    name: "Maria K.",
    meta: "Shared 9 books",
    initials: "MK",
  },
];

export function ReaderReviews() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
            Reader reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Loved by people who lend
          </h2>
          <p className="mt-3 text-slate-500">
            What readers on the shelf are saying.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <Quote className="size-5 text-indigo-200" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className="flex size-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-400">{review.meta}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
