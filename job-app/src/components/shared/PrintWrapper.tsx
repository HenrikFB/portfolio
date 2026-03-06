"use client";

import { useState } from "react";

export function PrintButton({ documentTitle }: { documentTitle?: string }) {
  const [showTip, setShowTip] = useState(false);

  function handlePrint() {
    const originalTitle = document.title;
    document.title = documentTitle ?? `${originalTitle || "Ansøgning"}`;

    window.print();

    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  }

  return (
    <>
      {showTip && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mx-4 max-w-sm rounded-xl bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-bold">Inden du printer</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <strong>Margener:</strong> Sæt til{" "}
                <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs">
                  Ingen
                </span>
              </li>
              <li>
                <strong>Valgmuligheder:</strong> Slå{" "}
                <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs">
                  Sidehoved og sidefod
                </span>{" "}
                fra
              </li>
              <li>
                <strong>Baggrund:</strong> Slå{" "}
                <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs">
                  Baggrundsgrafik
                </span>{" "}
                til (for CV-sidebar)
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => {
                  setShowTip(false);
                  handlePrint();
                }}
                className="flex-1 rounded-lg bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white"
              >
                Print nu
              </button>
              <button
                onClick={() => setShowTip(false)}
                className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm"
              >
                Annuller
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowTip(true)}
        className="no-print fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        Gem som PDF
      </button>
    </>
  );
}
