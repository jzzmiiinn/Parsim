import { ArrowRight, Sparkles, Terminal, Check } from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-12 top-10 -z-10 h-72 rounded-3xl bg-gradient-to-r from-orange-600/20 via-amber-600/10 to-transparent blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-b from-[#141214] via-[#0d0d12] to-[#09090b] px-6 py-16 sm:px-12 sm:py-20 text-center shadow-2xl shadow-black">
        {/* Subtle decorative grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ready for Production</span>
          </div>

          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Stop Paying for Context{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Your Agents Don&apos;t Need.
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Join engineering teams cutting AI inference bills by 80% and delivering sub-second response times. Start optimizing your agent context in under five minutes.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#developer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_-5px_rgba(249,115,22,0.6)] hover:bg-orange-600 hover:shadow-[0_0_35px_-3px_rgba(249,115,22,0.8)] transition-all"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#developer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <span>Read the Documentation</span>
            </a>
          </div>

          {/* Quick Checklist */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center space-x-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>3-line SDK setup</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>No credit card required</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>Zero-latency overhead (&lt;6ms)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
