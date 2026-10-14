import { useState } from "react";
import { Check, Copy, Code2, ArrowRight, Terminal } from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function DeveloperExperience() {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState<"ts" | "python">("ts");

  const tsCode = `import { Parsim } from "@parsim/sdk"; // Illustrative SDK
import OpenAI from "openai";

const openai = new OpenAI();
const optimizer = new Parsim({
  apiKey: process.env.PARSIM_API_KEY,
  policy: "aggressive_compression", // "conservative" | "balanced" | "aggressive_compression"
  pinEntities: ["user_id", "active_schema", "security_boundary"],
});

export async function runAgentTurn(agentState: AgentState) {
  // 1. Optimize raw conversation, tool outputs & intermediate thoughts
  const { messages: optimizedMessages, stats } = await optimizer.optimize({
    messages: agentState.messages,
    toolHistory: agentState.toolHistory,
    maxContextTokens: 16000,
  });

  console.log(\`Compressed \${stats.originalTokens} -> \${stats.optimizedTokens} (\${stats.percentSaved}% saved)\`);

  // 2. Dispatch the high-signal payload to any LLM provider
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: optimizedMessages,
  });

  return response;
}`;

  const pythonCode = `from parsim import ParsimOptimizer # Illustrative SDK
from openai import OpenAI

openai_client = OpenAI()
optimizer = ParsimOptimizer(
    api_key="parsim_live_key",
    policy="balanced",
    preserve_keys=["primary_goal", "active_constraints"]
)

def execute_agent_loop(agent_state):
    # 1. Distill raw multi-turn agent payload
    optimized_payload = optimizer.optimize_context(
        messages=agent_state.history,
        tool_results=agent_state.tool_calls
    )

    # 2. Call model with ~80% fewer billable input tokens
    completion = openai_client.chat.completions.create(
        model="gpt-4o",
        messages=optimized_payload.messages
    )
    return completion`;

  const copyToClipboard = () => {
    const code = language === "ts" ? tsCode : pythonCode;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer" className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
          <Terminal className="h-3.5 w-3.5" />
          <span>Developer First</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Built for the Way{" "}
          <span className="text-orange-500">Developers Build.</span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Wrap your client calls or point your base URL to our transparent proxy. Clean TypeScript
          and Python interfaces with zero runtime baggage.
        </p>
      </div>

      {/* Code Editor Preview */}
      <div className="mt-12 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d0d12] shadow-2xl">
        {/* Editor Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-800 bg-[#121217] px-5 py-3 gap-3">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <span className="h-3 w-3 rounded-full bg-zinc-700/60" />
              <span className="h-3 w-3 rounded-full bg-zinc-700/60" />
              <span className="h-3 w-3 rounded-full bg-zinc-700/60" />
            </div>
            <div className="flex items-center space-x-2 pl-4">
              <button
                onClick={() => setLanguage("ts")}
                className={`rounded px-2.5 py-1 text-xs font-mono font-medium transition-colors ${
                  language === "ts"
                    ? "bg-zinc-800 text-orange-400 border border-zinc-700"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                agent.ts
              </button>
              <button
                onClick={() => setLanguage("python")}
                className={`rounded px-2.5 py-1 text-xs font-mono font-medium transition-colors ${
                  language === "python"
                    ? "bg-zinc-800 text-orange-400 border border-zinc-700"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                agent.py
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-[11px] font-mono text-zinc-400">
              * Illustrative SDK workflow
            </span>
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center space-x-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Block */}
        <div className="p-5 sm:p-6 font-mono text-xs leading-relaxed text-zinc-300 bg-[#09090d] overflow-x-auto">
          <pre>
            <code>{language === "ts" ? tsCode : pythonCode}</code>
          </pre>
        </div>

        {/* Footer info & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-800 bg-[#111116] px-6 py-4 gap-4">
          <span className="text-xs text-zinc-400">
            Works out of the box with LangChain, LlamaIndex, AutoGen, and vanilla LLM wrappers.
          </span>
          <a
            href="#pricing"
            className="inline-flex items-center space-x-1.5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-orange-500/30 hover:bg-orange-600 transition-all"
          >
            <span>Start Building Today</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
