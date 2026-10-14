import {
  Boxes,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Bot,
} from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function Integrations() {
  const frameworks = [
    { name: "LangChain", type: "Framework", desc: "Native callback handler & message filter wrapper." },
    { name: "LlamaIndex", type: "RAG & Agents", desc: "Context compressor node for retrieval synthesis." },
    { name: "AutoGen", type: "Multi-Agent", desc: "Cross-agent payload distillation middleware." },
    { name: "CrewAI", type: "Orchestration", desc: "Task history & tool output compression." },
    { name: "Vercel AI SDK", type: "Fullstack", desc: "Streaming SSE proxy & edge middleware adapter." },
    { name: "Haystack", type: "Pipelines", desc: "Pipeline component for prompt pre-processing." },
  ];

  const models = [
    { name: "OpenAI", sub: "GPT-4o, GPT-4 Turbo, o1", category: "Provider" },
    { name: "Anthropic", sub: "Claude 3.5 Sonnet, Haiku, Opus", category: "Provider" },
    { name: "Google Gemini", sub: "Gemini 1.5 Pro, Flash", category: "Provider" },
    { name: "Mistral AI", sub: "Mistral Large, Codestral", category: "Provider" },
    { name: "Groq", sub: "Llama 3.3 70B, Mixtral", category: "Provider" },
    { name: "Self-Hosted / vLLM", sub: "Ollama, vLLM, TGI, SGLang", category: "Open Source" },
  ];

  return (
    <section className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
          <Boxes className="h-3.5 w-3.5" />
          <span>Ecosystem Compatibility</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Integrates With Your{" "}
          <span className="text-orange-500">Existing AI Stack.</span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Designed to fit cleanly into modern agent runtimes, vector orchestrators, and LLM providers
          without vendor lock-in.
        </p>
      </div>

      {/* Target Agent Frameworks Grid */}
      <div className="mt-14">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-6 text-center">
          Target Agent Frameworks
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-[#0c0c11] p-5 hover:border-zinc-700 hover:bg-zinc-900/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold text-white">
                    {fw.name}
                  </span>
                  <span className="rounded bg-zinc-800/80 px-2 py-0.5 text-[10px] font-mono font-medium text-orange-400 border border-zinc-700">
                    {fw.type}
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {fw.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Providers Grid */}
      <div className="mt-14">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-6 text-center">
          Compatible Model Endpoints
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {models.map((mod) => (
            <div
              key={mod.name}
              className="flex flex-col items-center justify-center rounded-xl border border-zinc-800/80 bg-[#0d0d12] p-4 text-center hover:border-orange-500/30 transition-colors"
            >
              <span className="font-display text-sm font-bold text-white">{mod.name}</span>
              <span className="mt-1 text-[11px] text-zinc-400 leading-tight">{mod.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Explicit Non-Endorsement Disclaimer */}
      <div className="mt-12 text-center">
        <p className="text-xs text-zinc-400">
          * Target integration ecosystem. All product names, logos, and brands are property of their respective owners. Mention does not imply formal partnership or endorsement.
        </p>
      </div>
    </section>
  );
}
