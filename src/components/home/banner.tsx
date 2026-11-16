"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    kicker: "Welcome to BookNook",
    title: "Your neighbourhood library, online",
    text: "Browse hundreds of titles shared by readers around you and borrow any of them for seven days, free.",
    image: "/images/img1.jpg",
  },
  {
    kicker: "Borrow in one click",
    title: "Find it. Borrow it. Read it tonight.",
    text: "Every book comes with a seven-day borrowing window and a one-click return when you are done.",
    image: "/images/img.jpg",
  },
  {
    kicker: "Share the shelf",
    title: "Lend a book, make a reader.",
    text: "Add your own collection to the shelf and let other readers discover and borrow your favourite titles.",
    image: "/images/img3.jpg",
  },
];

const noopSubscribe = () => () => {};

export function Banner() {
  // Swiper's autoplay module reads `Date.now()`, which cacheComponents forbids
  // during prerender — so the slider only renders after hydration.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="h-[520px] w-full bg-slate-900 md:h-[640px]" />
    );
  }

  return (
    <Swiper
      className="banner h-[520px] w-full md:h-[640px]"
      modules={[Autoplay, EffectFade, Pagination]}
      loop
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.kicker} className="relative">
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/25" />
          <div className="relative flex h-full items-center">
            <div className="mx-auto w-full max-w-6xl px-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
                {slide.kicker}
              </p>
              <h1 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-md text-slate-200 md:text-lg">
                {slide.text}
              </p>
              <Link
                href="/all-books"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                Browse Books
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
