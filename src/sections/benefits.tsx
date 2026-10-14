import {
  TrendingDown,
  DollarSign,
  Zap,
  Repeat,
  Eye,
  Terminal,
  Compass,
  Headphones,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Lower Token Consumption",
      metric: "Up to 85%",
      description:
        "Dramatically reduce input token count before it hits model providers by filtering redundant turns and verbose payloads.",
    },
    {
      icon: DollarSign,
      title: "Reduced Inference Costs",
      metric: "$0.005 vs $0.08",
      description:
        "Protect product unit economics as your user base and autonomous agent turn counts scale aggressively.",
    },
    {
      icon: Zap,
      title: "Faster Response Latencies",
      metric: "3x Faster TTFT",
      description:
        "Smaller context prompts mean dramatically shorter prompt prefill times and snappier streaming responses for end users.",
    },
    {
      icon: Repeat,
      title: "Extended Agent Horizons",
      metric: "100+ Turns",
      description:
        "Prevent long-running agent workflows from hitting 128k or 200k model token limits or crashing halfway through complex jobs.",
    },
    {
      icon: Eye,
      title: "Granular Context Visibility",
      metric: "100% Audit Trail",
      description:
        "Inspect exactly what was pruned, summarized, or retained for every single call with full developer tracing.",
    },
  ];

  const useCases = [
    {
      icon: Terminal,
      title: "Coding Agents",
      summary: "Prevents entire codebases from re-loading on every syntax check.",
      problem: "Coding agents re-read large repositories and full test traces every turn.",
      solution: "Distills ASTs, retains only modified file diffs and active compile errors.",
      result: "82% fewer tokens per iteration loop.",
    },
    {
      icon: Compass,
      title: "Research Assistants",
      summary: "Extracts key findings from dozens of search results.",
      problem: "Scraping 20 web pages floods the context window with navigation and boilerplate.",
      solution: "Extracts high-entropy factual claims and deduplicates cross-source findings.",
      result: "90% reduction in raw HTML scrapings.",
    },
    {
      icon: Headphones,
      title: "Customer Support Agents",
      summary: "Maintains concise state across multi-hour support tickets.",
      problem: "Long multi-hour support dialogs repeat customer greeting and resolved issues.",
      solution: "Maintains an active state digest with user identity and unresolved issues.",
      result: "74% prompt reduction on turn 10+.",
    },
    {
      icon: Building2,
      title: "Enterprise AI Swarms",
      summary: "Coordinates multi-agent workflows without token duplication.",
      problem: "Inter-agent messages pass monolithic payloads across planner, reviewer, and executor.",
      solution: "Pins strict communication schemas and strips transient agent scratchpads.",
      result: "Cuts cross-agent inference costs by 3.5x.",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      {/* Benefits Overview */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Engineered for Performance.{" "}
          <span className="text-orange-500">Built for Scale.</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Measurable efficiency gains across token consumption, inference expenses, and response speed.
        </p>
      </div>

      {/* 5 Benefits Row */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#0c0c10] p-5 hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-3 font-mono text-xl font-bold text-white">{b.metric}</p>
                <h3 className="mt-1 text-sm font-semibold text-zinc-200">{b.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{b.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4 Detailed Use Cases */}
      <div className="mt-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-400">
            Real-World Impact
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Optimized for Every Agent Archetype
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            From single-purpose assistants to autonomous multi-agent engineering swarms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className="rounded-2xl border border-zinc-800 bg-[#0d0d12] p-6 sm:p-7 hover:border-orange-500/40 transition-colors shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-orange-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{uc.title}</h4>
                      <p className="text-xs text-zinc-400">{uc.summary}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 text-xs font-mono font-medium text-emerald-400">
                    {uc.result}
                  </span>
                </div>

                <div className="mt-6 space-y-3 border-t border-zinc-800/80 pt-4 text-xs">
                  <div>
                    <span className="font-semibold text-zinc-300">Challenge: </span>
                    <span className="text-zinc-400">{uc.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-400">Optimization: </span>
                    <span className="text-zinc-300">{uc.solution}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
