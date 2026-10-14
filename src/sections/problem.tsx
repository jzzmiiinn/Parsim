import {
  MessageSquare,
  Terminal,
  FileText,
  BrainCircuit,
  Search,
  Database,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

export default function Problem() {
  const sources = [
    {
      icon: MessageSquare,
      title: "Conversation History",
      description:
        "Multi-turn exchanges accumulate obsolete greetings, resolved prompts, and outdated instructions that get resent on every call.",
      wasteRate: "~35% of total payload",
      badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
    },
    {
      icon: Terminal,
      title: "Tool Outputs",
      description:
        "Full stacktraces, unpaginated JSON payloads, and CLI logs dump thousands of tokens when only a single status code or ID mattered.",
      wasteRate: "~45% of total payload",
      badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
    {
      icon: FileText,
      title: "Documents & Chunks",
      description:
        "Multi-page RAG retrieval embeds entire files into the prompt, forcing the LLM to search through noise and diluting attention.",
      wasteRate: "~25% of total payload",
      badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
    },
    {
      icon: BrainCircuit,
      title: "Intermediate Reasoning",
      description:
        "Chain-of-thought steps, dead-end retry loops, and scratchpads remain permanently in context long after decisions have been made.",
      wasteRate: "~30% of total payload",
      badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
    {
      icon: Search,
      title: "Retrieved Information",
      description:
        "Vector search fetches duplicate chunks across consecutive turns, repeatedly paying for the same background context.",
      wasteRate: "~20% of total payload",
      badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
    },
    {
      icon: Database,
      title: "Agent State & Memory",
      description:
        "Unpruned state objects and full environment snapshots are repeatedly serialized into system prompts on every single agent loop.",
      wasteRate: "~15% of total payload",
      badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
  ];

  return (
    <section id="problem" className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-3.5 py-1 text-xs font-semibold text-red-400">
          <AlertTriangle className="h-3.5 w-3.5" />
          <span>The Hidden Scaling Bottleneck</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Your Context Window Is Becoming a{" "}
          <span className="text-orange-500">Cost Center.</span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          As AI agents execute complex, multi-turn tasks, unmanaged context causes exponential token
          growth. Every subsequent model call re-processes thousands of stale tokens—driving up
          API bills, spiking latency, and triggering model forgetfulness.
        </p>
      </div>

      {/* Six Sources Grid */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sources.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-orange-400 transition-colors group-hover:border-orange-500/40 group-hover:bg-orange-950/20">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-mono font-medium ${item.badgeColor}`}>
                    {item.wasteRate}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {idx + 1}. {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center space-x-2 border-t border-zinc-800/60 pt-4 text-xs text-zinc-400">
                <TrendingUp className="h-3.5 w-3.5 text-red-400" />
                <span>Compounds +3x across 15+ turns</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cost Impact Banner */}
      <div className="mt-12 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-950/20 via-zinc-900/60 to-zinc-900/20 p-6 sm:p-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3 text-center md:text-left">
          <div className="md:col-span-2">
            <h4 className="font-display text-xl font-bold text-white">
              The 100-Turn Agent Paradox
            </h4>
            <p className="mt-1.5 text-sm text-zinc-400">
              Turn 1 costs <span className="text-zinc-200 font-semibold">$0.003</span>. By Turn 40, without context optimization, the exact same agent step costs <span className="text-red-400 font-semibold">$0.38 per call</span> because it drags all previous turns along.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a
              href="#solution"
              className="inline-flex items-center space-x-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2.5 text-sm font-semibold text-orange-300 transition-all hover:bg-orange-500 hover:text-white"
            >
              <span>See the Solution</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
