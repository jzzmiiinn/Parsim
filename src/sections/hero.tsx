import { useState } from "react";
import { ArrowRight, Terminal, Cpu, Zap, ArrowDown, Check, Layers, Sparkles } from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"visual" | "terminal">("visual");

  return (
    <section id="hero" className="relative w-full max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
      {/* Decorative ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        {/* Left Column: Headline & Value Proposition */}
        <div className="flex flex-col items-start text-left lg:col-span-6">
          {/* Eyebrow Pill */}
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
            </span>
            <span>Context Optimization for AI Agents</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.1]">
            Your AI Agents Need{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Less Context.
            </span>{" "}
            Not Less Intelligence.
          </h1>

          {/* Supporting Description */}
          <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Multi-turn AI agents continuously accumulate conversation history, bloated tool outputs,
            and intermediate scratchpads. <strong className="text-zinc-200">{BRAND_NAME}</strong>{" "}
            automatically compresses, deduplicates, and prunes unnecessary tokens before model
            calls—slashing inference costs by up to 80% while preserving the exact knowledge agents need to succeed.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#developer"
              className="inline-flex items-center justify-center space-x-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_-5px_rgba(249,115,22,0.5)] transition-all hover:bg-orange-600 hover:shadow-[0_0_30px_-3px_rgba(249,115,22,0.7)]"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#developer"
              className="inline-flex items-center justify-center space-x-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <span>Explore Documentation</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-6 text-left">
            <div>
              <p className="font-display text-2xl font-bold text-white">82%</p>
              <p className="text-xs text-zinc-400">Avg. Token Reduction</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">&lt;6ms</p>
              <p className="text-xs text-zinc-400">Pipeline Latency</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-orange-400">Zero</p>
              <p className="text-xs text-zinc-400">Quality Degradation</p>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Product Flow Preview */}
        <div className="w-full lg:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d0d11] shadow-2xl shadow-black/80">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-[#121217] px-4 py-3">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-zinc-700/60" />
                <div className="h-3 w-3 rounded-full bg-zinc-700/60" />
                <div className="h-3 w-3 rounded-full bg-zinc-700/60" />
                <span className="ml-2 font-mono text-xs text-zinc-400">
                  agent_pipeline_runtime.ts
                </span>
              </div>
              <div className="flex items-center space-x-1 rounded-lg bg-zinc-900 p-0.5 border border-zinc-800">
                <button
                  onClick={() => setActiveTab("visual")}
                  className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === "visual"
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Context Flow
                </button>
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === "terminal"
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Raw Logs
                </button>
              </div>
            </div>

            {/* Window Content */}
            {activeTab === "visual" ? (
              <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
                {/* Step 1: Raw Context */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2 text-zinc-400 font-semibold">
                      <Layers className="h-4 w-4 text-zinc-500" />
                      <span>1. Raw Accumulated Context</span>
                    </span>
                    <span className="rounded bg-red-950/50 px-2 py-0.5 text-[11px] font-medium text-red-400 border border-red-900/50">
                      124,500 Tokens
                    </span>
                  </div>
                  <div className="mt-2 text-zinc-400 space-y-1 text-[11px]">
                    <div className="flex justify-between">
                      <span>• Conversation turns (x42):</span>
                      <span className="text-zinc-400">38,200 tok</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Shell outputs &amp; tool responses:</span>
                      <span className="text-zinc-400">64,800 tok</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• RAG document chunks &amp; scratchpads:</span>
                      <span className="text-zinc-400">21,500 tok</span>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector with Optimization Layer */}
                <div className="relative flex items-center justify-center py-1">
                  <div className="w-full border-t border-dashed border-zinc-800" />
                  <div className="absolute flex items-center space-x-2 rounded-full border border-orange-500/40 bg-orange-950/80 px-4 py-1 text-xs font-semibold text-orange-300 shadow-md shadow-orange-500/20 backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-orange-400" />
                    <span>{BRAND_NAME} Optimizer (4.2ms)</span>
                  </div>
                </div>

                {/* Step 2: Essential Context */}
                <div className="rounded-xl border border-orange-500/30 bg-orange-950/15 p-4 shadow-inner shadow-orange-500/5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2 text-orange-200 font-semibold">
                      <Zap className="h-4 w-4 text-orange-400" />
                      <span>2. Essential Distilled Context</span>
                    </span>
                    <span className="rounded bg-orange-500/20 px-2 py-0.5 text-[11px] font-bold text-orange-300 border border-orange-500/40">
                      18,400 Tokens (-85.2%)
                    </span>
                  </div>
                  <div className="mt-2 text-zinc-300 space-y-1 text-[11px]">
                    <div className="flex items-center space-x-1.5 text-emerald-400">
                      <Check className="h-3 w-3" />
                      <span>Deduplicated conversation history</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-emerald-400">
                      <Check className="h-3 w-3" />
                      <span>Compressed JSON tool schemas to relevant entity keys</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-emerald-400">
                      <Check className="h-3 w-3" />
                      <span>Preserved task goals, schemas &amp; active constraints</span>
                    </div>
                  </div>
                </div>

                {/* Step 3: Destination Model */}
                <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-zinc-300">
                  <div className="flex items-center space-x-2.5">
                    <Cpu className="h-4 w-4 text-orange-400" />
                    <span className="text-xs font-medium">3. Delivered to LLM</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-white">Inference Cost: </span>
                    <span className="text-xs text-emerald-400 font-bold">$0.09</span>
                    <span className="text-xs text-zinc-400 line-through ml-1.5">$0.62</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 sm:p-5 font-mono text-[11px] leading-relaxed text-zinc-300 bg-zinc-950/80 overflow-x-auto">
                <p className="text-zinc-400"># Intercepting Agent Call turn_id=892</p>
                <p className="text-orange-400">$ parsim optimize --stream --policy=balanced</p>
                <p className="text-zinc-300 mt-2">[INFO] Ingestion: 124,500 raw tokens detected</p>
                <p className="text-zinc-400">[ANALYZE] 64,800 tokens from tool: bash_executor (92% repetitive)</p>
                <p className="text-zinc-400">[ANALYZE] 38,200 tokens from history (18 resolved intents)</p>
                <p className="text-emerald-400">[PRUNE] Eliminated 106,100 redundant tokens in 4.2ms</p>
                <p className="text-emerald-300">[OUTPUT] Retained 18,400 essential tokens (entropy score: 0.94)</p>
                <p className="text-orange-300 mt-2">&gt;&gt; Dispatching to model: claude-3-5-sonnet-20241022</p>
                <p className="text-zinc-400">[STATUS] TTFT: 310ms (was 2,840ms) | Savings: $0.53 / call</p>
              </div>
            )}

            {/* Disclaimer Footer */}
            <div className="border-t border-zinc-800/80 bg-[#09090b] px-4 py-2.5 text-center">
              <span className="text-[11px] text-zinc-400">
                * Illustrative demonstration metrics for a representative multi-turn agent workflow.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
