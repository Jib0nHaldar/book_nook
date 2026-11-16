"use client";

import { useSyncExternalStore } from "react";

// cacheComponents forbids `new Date()` during prerender, and the react-hooks
// lint rules forbid setState in effects — so the year is read via a client-only
// snapshot and renders "…" on the server.
const noopSubscribe = () => () => {};

export function CopyrightYear() {
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => null,
  );

  return <>{year ?? "…"}</>;
}
