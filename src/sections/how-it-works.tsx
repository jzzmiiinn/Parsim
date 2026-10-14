import {
  Download,
  Cpu,
  Scissors,
  Send,
  ArrowRight,
  GitCommit,
  CheckCircle,
} from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture",
      subtitle: "Zero-Latency Interception",
      description:
        "Hooks directly into LangChain, AutoGen, CrewAI, or raw OpenAI/Anthropic client calls via an SDK wrapper or transparent proxy.",
      metrics: "< 1.2ms interception",
      icon: Download,
      details: [
        "Inspects system prompts & messages",
        "Captures streaming tool payloads",
        "Tracks token churn per turn",
      ],
    },
    {
      number: "02",
      title: "Analyze",
      subtitle: "Information Entropy Scoring",
      description:
        "Fast local heuristic models score context entropy, entity dependencies, recency decay, and semantic duplication against task goals.",
      metrics: "Sub-millisecond token classifier",
      icon: Cpu,
      details: [
        "Detects redundant conversational turns",
        "Identifies stale tool execution logs",
        "Flags obsolete chain-of-thought steps",
      ],
    },
    {
      number: "03",
      title: "Optimize",
      subtitle: "Lossless Compression & Pruning",
      description:
        "Applies deterministic schema distillation, semantic deduplication, and attention pruning according to your custom policy.",
      metrics: "Avg. 75-88% token reduction",
      icon: Scissors,
      details: [
        "Distills multi-page JSON to active keys",
        "Prunes resolved error scratchpads",
        "Preserves critical system constraints",
      ],
    },
    {
      number: "04",
      title: "Deliver",
      subtitle: "Dispatched to Any Model",
      description:
        "The streamlined, high-signal payload is delivered to OpenAI, Claude, Gemini, or local models with lower latency and higher focus.",
      metrics: "Instant TTFT acceleration",
      icon: Send,
      details: [
        "Preserves native token schemas",
        "Emits full audit log & token diff",
        "Ready for subsequent agent turns",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
          <GitCommit className="h-3.5 w-3.5" />
          <span>Execution Architecture</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Four Steps to{" "}
          <span className="text-orange-500">Optimized Context.</span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          No architectural overhaul needed. <strong className="text-zinc-200">{BRAND_NAME}</strong>{" "}
          plugs into your agent loop in minutes and executes inline in under 6 milliseconds.
        </p>
      </div>

      {/* Connected 4-Step Technical Workflow Diagram */}
      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4 relative">
        {/* Background Connecting line on desktop */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-12 h-0.5 border-t border-dashed border-zinc-800 -z-0"
        />

        {steps.map((step, idx) => {
          const IconComp = step.icon;
          return (
            <div
              key={step.title}
              className="relative z-10 flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0d0d12] p-6 shadow-xl transition-all duration-200 hover:border-orange-500/40 hover:shadow-orange-500/5"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-orange-400 shadow-inner">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-2xl font-black text-zinc-700">
                    {step.number}
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-[11px] font-mono font-medium text-orange-400">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-800/80 pt-4">
                <div className="mb-3 rounded bg-zinc-900/80 px-2.5 py-1 text-[11px] font-mono text-emerald-400 border border-zinc-800 text-center">
                  {step.metrics}
                </div>
                <ul className="space-y-1.5 text-[11px] text-zinc-400">
                  {step.details.map((item) => (
                    <li key={item} className="flex items-center space-x-1.5">
                      <CheckCircle className="h-3 w-3 text-orange-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
