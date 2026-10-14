import { useState } from "react";
import {
  Minimize2,
  FileCode,
  Trash2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Code2,
} from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function Solution() {
  const [activeTab, setActiveTab] = useState<"raw" | "optimized">("optimized");

  const capabilities = [
    {
      icon: Minimize2,
      title: "Compress Redundant Context",
      badge: "Semantic Deduplication",
      description:
        "Losslessly compresses repetitive conversation turns, system reminders, and recurring prompt structures while retaining semantic meaning.",
      details: ["Identifies conceptual duplicates", "Collapses repetitive chat turns", "Preserves exact intent & tone"],
    },
    {
      icon: FileCode,
      title: "Replace Verbose Outputs",
      badge: "Schema Distillation",
      description:
        "Replaces multi-thousand-line tool payloads, raw HTML dumps, and JSON schemas with compact, structured entity digests containing only active keys.",
      details: ["Extracts query-relevant keys", "Summarizes tabular/array responses", "Preserves schema contracts"],
    },
    {
      icon: Trash2,
      title: "Eliminate Irrelevant Information",
      badge: "Attention-Aware Pruning",
      description:
        "Continuously purges resolved questions, transient scratchpad calculations, and dead-end tool calls that no longer contribute to the active task.",
      details: ["Removes obsolete error traces", "Discards superseded iterations", "Recovers lost attention capacity"],
    },
    {
      icon: ShieldCheck,
      title: "Preserve Essential Intelligence",
      badge: "Deterministic Pinning",
      description:
        "Guarantees that user instructions, core system rules, active variables, and critical decision pivots remain 100% intact.",
      details: ["Immutable goal protection", "Entity reference preservation", "Zero accuracy or benchmark drop"],
    },
  ];

  const rawJson = `// Raw Agent Context (Turn 18) — 64,280 Tokens
{
  "system": "You are a senior fullstack software engineer...", // Repeated 18x
  "history": [
    { "role": "user", "content": "Help me inspect the auth bug..." },
    { "role": "assistant", "content": "Sure, let me check package.json..." },
    // 16 turns of back-and-forth debugging chat...
  ],
  "tool_calls": [
    {
      "tool": "read_file",
      "args": { "path": "package-lock.json" },
      "output": "{ /* 14,800 lines of raw lockfile dependencies */ }"
    },
    {
      "tool": "run_bash",
      "args": { "cmd": "npm test" },
      "output": "[FAIL] 142 passing, 1 failed (Error at auth.ts:42)..."
    }
  ]
}`;

  const optimizedJson = `// ${BRAND_NAME} Optimized Context — 6,850 Tokens (-89.3%)
{
  "system": "You are a senior fullstack software engineer...",
  "active_task": {
    "goal": "Fix authentication bug in auth.ts:42",
    "status": "In progress (1 failed test)"
  },
  "history_digest": [
    "Turn 1-16 summarized: Investigated package dependencies. Isolated error to auth.ts."
  ],
  "distilled_tools": [
    {
      "tool": "read_file",
      "summary": "package-lock.json: @clerk/clerk-react is v5.2.0"
    },
    {
      "tool": "run_bash",
      "concise_result": "npm test: Failed only at auth.ts:42 (Missing publishableKey)"
    }
  ]
}`;

  return (
    <section id="solution" className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
          <Code2 className="h-3.5 w-3.5" />
          <span>The Optimization Engine</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Keep What Matters.{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Remove What Doesn&apos;t.
          </span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          <strong className="text-zinc-200">{BRAND_NAME}</strong> acts as an intelligent context
          firewall between your agent runtime and your LLM endpoints. It compresses, replaces, and
          purges noisy context so your models stay sharp, fast, and cost-effective.
        </p>
      </div>

      {/* 4 Core Capabilities Grid */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((cap) => {
          const IconComp = cap.icon;
          return (
            <div
              key={cap.title}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0c0c10] p-6 transition-all hover:border-orange-500/40 hover:bg-zinc-900/60"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400 group-hover:scale-105 transition-transform">
                  <IconComp className="h-5 w-5" />
                </div>

                <span className="mt-4 inline-block text-[11px] font-mono font-medium text-orange-400">
                  {cap.badge}
                </span>

                <h3 className="mt-1 font-display text-lg font-bold text-white">
                  {cap.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                  {cap.description}
                </p>
              </div>

              <ul className="mt-6 space-y-1.5 border-t border-zinc-800/80 pt-4 text-[11px] text-zinc-400">
                {cap.details.map((detail) => (
                  <li key={detail} className="flex items-center space-x-1.5">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Interactive Before & After Code Comparison */}
      <div className="mt-16 rounded-2xl border border-zinc-800 bg-[#0d0d12] overflow-hidden shadow-2xl">
        {/* Toggle Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 bg-[#121217] px-6 py-4 gap-3">
          <div>
            <span className="font-display text-sm font-bold text-white">
              Interactive Context Transformation
            </span>
            <p className="text-xs text-zinc-400">
              Inspect how multi-turn agent payload is distilled before dispatch
            </p>
          </div>

          <div className="flex items-center space-x-2 rounded-lg bg-zinc-950 p-1 border border-zinc-800">
            <button
              onClick={() => setActiveTab("raw")}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeTab === "raw"
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Raw Input (64.2k tok)
            </button>
            <button
              onClick={() => setActiveTab("optimized")}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeTab === "optimized"
                  ? "bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Optimized (6.8k tok, -89%)
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 sm:p-6 font-mono text-xs leading-relaxed overflow-x-auto bg-[#0a0a0e]">
          <pre className="text-zinc-300">
            <code>{activeTab === "raw" ? rawJson : optimizedJson}</code>
          </pre>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-800 bg-[#101015] px-6 py-3 text-xs text-zinc-400 gap-2">
          <span>
            {activeTab === "raw"
              ? "⚠️ High token bloat: 14,800-line lockfile dumped verbatim into LLM prompt."
              : "✅ Distilled: Retained target dependency version and exact test failure signature."}
          </span>
          <span className="font-mono text-orange-400 font-semibold">
            {activeTab === "raw" ? "Cost: $0.32 / call" : "Cost: $0.03 / call (-89%)"}
          </span>
        </div>
      </div>
    </section>
  );
}
