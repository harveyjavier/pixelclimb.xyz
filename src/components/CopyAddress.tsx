"use client";

import { useState } from "react";

export default function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the address stays selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex w-full items-center gap-3 rounded-lg border border-line bg-black/30 px-3 py-2.5 text-left font-mono text-xs text-muted transition-colors hover:border-pcmb-blue/50 hover:text-foreground sm:text-sm"
      aria-label="Copy token mint address"
    >
      <span className="min-w-0 flex-1 truncate">{address}</span>
      <span className="shrink-0 text-[10px] uppercase tracking-widest text-pcmb-blue">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
