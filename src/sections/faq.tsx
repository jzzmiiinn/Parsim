import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is AI context optimization?",
      a: "AI context optimization is the automated process of managing, distilling, deduplicating, and pruning the token payload sent to large language models. Rather than resending raw conversation logs, complete tool dumps, and obsolete scratchpads, the optimization engine extracts and delivers only the essential information needed for the model to take its next action.",
    },
    {
      q: "How does this reduce inference costs without losing intelligence?",
      a: "LLM providers bill per input token. In multi-turn agents, up to 80% of tokens in later turns consist of repetitive greetings, redundant tool schemas, and resolved error traces. By applying lossless semantic compression and schema distillation, we reduce billable input tokens while preserving exact active goals, constraints, entity references, and decision pivots.",
    },
    {
      q: "What potential effects does optimization have on model output quality?",
      a: "Counter-intuitively, reducing context bloat frequently improves model output quality. Modern LLMs suffer from 'lost in the middle' phenomena and attention dilution when context exceeds 50k+ tokens. By removing noise and bringing task-relevant constraints closer to the generation prompt, models exhibit higher instruction adherence and fewer hallucinations.",
    },
    {
      q: "What types of context can be optimized?",
      a: "The engine optimizes six primary sources of context accumulation: (1) multi-turn conversation history, (2) verbose shell/CLI and API tool outputs, (3) RAG document retrieval chunks, (4) intermediate chain-of-thought scratchpads, (5) repetitive vector search results, and (6) serialized agent memory state objects.",
    },
    {
      q: "How does it integrate with existing agent workflows?",
      a: "Integration requires minimal changes to your codebase. You can use our lightweight TypeScript or Python SDK client wrappers around your OpenAI/Anthropic calls, connect via our LangChain / LlamaIndex callback handlers, or route your agent's API base URL through our streaming HTTP proxy.",
    },
    {
      q: "Can we configure custom retention or pruning policies?",
      a: "Yes. Every agent workflow is unique. You can specify exact retention policies: pinning critical keys (such as user_id or active_schema), setting token ceilings, configuring recency decay rates, or selecting between conservative, balanced, and aggressive compression profiles per agent role.",
    },
    {
      q: "How do developers get started?",
      a: "Getting started takes less than 5 minutes. Review the TypeScript or Python code examples in our Developer section, configure your target context policy, and wrap your initial agent loop to start inspecting before-and-after token diffs immediately in development.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Clear Answers</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Frequently Asked <span className="text-orange-500">Questions.</span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          Everything you need to know about context optimization, inference cost reduction, and agent integration.
        </p>
      </div>

      {/* Accessible Interactive Accordion */}
      <div className="mt-14 space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.q}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-orange-500/40 bg-zinc-900/60 shadow-lg shadow-orange-500/5"
                  : "border-zinc-800 bg-[#0c0c11] hover:border-zinc-700 hover:bg-zinc-900/30"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <span className="font-display text-base font-bold text-white pr-4">
                  {faq.q}
                </span>
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "rotate-180 border-orange-500/40 text-orange-400 bg-orange-950/30" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-zinc-400 border-t border-zinc-800/60 mt-1">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
