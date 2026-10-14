import { useState } from "react";
import {
  BarChart3,
  Activity,
  Layers,
  DollarSign,
  TrendingDown,
  RefreshCw,
  Clock,
  Sparkles,
} from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function AnalyticsPreview() {
  const [selectedRange, setSelectedRange] = useState("24h");

  const stageBreakdown = [
    { stage: "System & Core Rules", rawTokens: "3,200", optTokens: "3,200", savedPct: "0%", note: "100% Pinned (Safety & Constraints)" },
    { stage: "Chat History (Turn 1-24)", rawTokens: "42,600", optTokens: "5,800", savedPct: "-86.4%", note: "Summarized past turns" },
    { stage: "Tool Outputs (Bash/Git/APIs)", rawTokens: "68,400", optTokens: "7,400", savedPct: "-89.2%", note: "Extracted relevant keys only" },
    { stage: "RAG Retrieval (14 Chunks)", rawTokens: "28,200", optTokens: "3,100", savedPct: "-89.0%", note: "Filtered zero-entropy boilerplate" },
    { stage: "Scratchpad / CoT Thoughts", rawTokens: "18,900", optTokens: "1,200", savedPct: "-93.7%", note: "Pruned dead-end retry paths" },
  ];

  const recentEvents = [
    { id: "evt-9821", agent: "coding_agent_pr_review", raw: "128,400 tok", opt: "16,800 tok", reduction: "-86.9%", latency: "4.2ms", status: "success" },
    { id: "evt-9820", agent: "deep_researcher_bot", raw: "84,200 tok", opt: "11,400 tok", reduction: "-86.5%", latency: "3.8ms", status: "success" },
    { id: "evt-9819", agent: "support_triage_flow", raw: "34,900 tok", opt: "6,200 tok", reduction: "-82.2%", latency: "2.1ms", status: "success" },
    { id: "evt-9818", agent: "data_analyst_sql_gen", raw: "52,100 tok", opt: "9,800 tok", reduction: "-81.2%", latency: "3.4ms", status: "success" },
  ];

  return (
    <section id="analytics" className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
          <Activity className="h-3.5 w-3.5" />
          <span>Real-Time Observability</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Visibility Into Every{" "}
          <span className="text-orange-500">Single Token Saved.</span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Track token compression, cost savings, and latency metrics across all active agent runs with
          sub-second telemetry.
        </p>
      </div>

      {/* Dashboard Preview Window */}
      <div className="mt-14 overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0c11] shadow-2xl">
        {/* Dashboard Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-800 bg-[#111116] px-6 py-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <BarChart3 className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-white">
                Context Optimization Telemetry
              </h3>
              <p className="text-[11px] text-zinc-400">
                Production Cluster #us-east-1 • Live Stream
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {["1h", "24h", "7d", "30d"].map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRange(r)}
                className={`rounded px-2.5 py-1 text-xs font-mono font-medium transition-colors ${
                  selectedRange === r
                    ? "bg-zinc-800 text-orange-400 border border-zinc-700"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-zinc-800 bg-[#09090d]">
          <div className="p-6 border-b sm:border-b-0 sm:border-r border-zinc-800/80">
            <span className="text-xs font-medium text-zinc-400">Raw Tokens Ingested</span>
            <p className="mt-2 font-mono text-2xl font-bold text-white">161.3M</p>
            <div className="mt-1 flex items-center text-xs text-zinc-400">
              <span>Past 24 hours</span>
            </div>
          </div>

          <div className="p-6 border-b sm:border-b-0 lg:border-r border-zinc-800/80">
            <span className="text-xs font-medium text-zinc-400">Optimized Tokens Sent</span>
            <p className="mt-2 font-mono text-2xl font-bold text-emerald-400">24.2M</p>
            <div className="mt-1 flex items-center text-xs text-emerald-400">
              <TrendingDown className="h-3 w-3 mr-1" />
              <span>-85.0% Net Reduction</span>
            </div>
          </div>

          <div className="p-6 border-b sm:border-b-0 sm:border-r border-zinc-800/80">
            <span className="text-xs font-medium text-zinc-400">Estimated Cost Avoided</span>
            <p className="mt-2 font-mono text-2xl font-bold text-orange-400">$3,428.00</p>
            <div className="mt-1 flex items-center text-xs text-zinc-400">
              <span>Based on $0.025/1k tok</span>
            </div>
          </div>

          <div className="p-6">
            <span className="text-xs font-medium text-zinc-400">Average Pipeline Latency</span>
            <p className="mt-2 font-mono text-2xl font-bold text-white">4.1 ms</p>
            <div className="mt-1 flex items-center text-xs text-emerald-400">
              <span>P99: 8.6ms</span>
            </div>
          </div>
        </div>

        {/* Breakdown by Stage Visualization */}
        <div className="p-6 sm:p-8 border-b border-zinc-800 bg-[#0d0d12]">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center justify-between">
            <span>Context Breakdown Across Agent Execution Turn</span>
            <span className="text-xs font-normal text-zinc-400">
              Turn 24 Context Snapshot
            </span>
          </h4>

          <div className="space-y-4">
            {stageBreakdown.map((item) => (
              <div key={item.stage} className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-zinc-200">{item.stage}</span>
                  <div className="flex items-center space-x-3 font-mono">
                    <span className="text-zinc-400 line-through">{item.rawTokens} tok</span>
                    <span className="text-white font-bold">{item.optTokens} tok</span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      item.savedPct.startsWith("-")
                        ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/50"
                        : "bg-zinc-800 text-zinc-300"
                    }`}>
                      {item.savedPct}
                    </span>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>{item.note}</span>
                  <span className="text-orange-400/80 font-mono">Engine Rule Applied</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Activity Stream */}
        <div className="p-6 bg-[#0a0a0e]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                Recent Optimization Events
              </h4>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">Live Stream</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="pb-2 font-medium">Trace ID</th>
                  <th className="pb-2 font-medium">Agent Workflow</th>
                  <th className="pb-2 font-medium">Raw Payload</th>
                  <th className="pb-2 font-medium">Optimized</th>
                  <th className="pb-2 font-medium">Savings</th>
                  <th className="pb-2 font-medium text-right">Overhead</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                {recentEvents.map((evt) => (
                  <tr key={evt.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-2.5 text-zinc-400">{evt.id}</td>
                    <td className="py-2.5 font-sans font-medium text-white">{evt.agent}</td>
                    <td className="py-2.5 text-zinc-400">{evt.raw}</td>
                    <td className="py-2.5 text-orange-400 font-semibold">{evt.opt}</td>
                    <td className="py-2.5 text-emerald-400 font-semibold">{evt.reduction}</td>
                    <td className="py-2.5 text-right text-zinc-400">{evt.latency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="border-t border-zinc-800 bg-[#09090b] px-6 py-3 text-center">
          <p className="text-xs text-zinc-400">
            * All telemetry and token counts shown are sample metrics for demonstration purposes and do not represent verified production guarantees.
          </p>
        </div>
      </div>
    </section>
  );
}
