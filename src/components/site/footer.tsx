import { CopyrightYear } from "@/components/site/copyright-year";
import Link from "next/link";
import { BookOpenText, Mail, MapPin, Phone } from "lucide-react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.5V5.1c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2H7.9v3h2.4v7h3.2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M17.8 4h2.8l-6.1 7 7.2 9h-5.6l-4.4-5.7L6.6 20H3.8l6.5-7.5L3.4 4h5.7l4 5.2L17.8 4zm-1 14.2h1.6L7.6 5.7H5.9l10.9 12.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-4"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "X (Twitter)", href: "https://x.com", Icon: XIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/all-books", label: "All Books" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="rounded-lg bg-indigo-600 p-1.5 text-white">
              <BookOpenText className="size-5" />
            </span>
            <span className="text-xl font-bold tracking-tight text-white">
              Book<span className="text-indigo-400">Nook</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            A community book-borrowing platform. Discover titles, borrow them
            for seven days, and return with one click.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full bg-slate-800 p-2.5 text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-indigo-400" />
              <a href="mailto:hello@booknook.com" className="hover:text-white">
                hello@booknook.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-indigo-400" />
              <a href="tel:+8801700000000" className="hover:text-white">
                +880 1700-000000
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 shrink-0 text-indigo-400" />
              <span>House 12, Road 5, Dhanmondi, Dhaka 1205</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-slate-500">
          © <CopyrightYear /> BookNook. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
