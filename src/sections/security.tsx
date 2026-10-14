import {
  Shield,
  Sliders,
  Eye,
  Lock,
  Server,
  FileCheck,
} from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function Security() {
  const principles = [
    {
      icon: Shield,
      title: "Task-Relevant Context Preservation",
      description:
        "Deterministic heuristics ensure system prompts, safety guardrails, active user constraints, and recent entity states are never pruned.",
    },
    {
      icon: Sliders,
      title: "Configurable Optimization Policies",
      description:
        "You define exact retention rules, token budgets, and compression aggressiveness per agent role, workflow stage, or customer tier.",
    },
    {
      icon: Server,
      title: "Private & Local Deployment Options",
      description:
        "Designed to deploy as an in-VPC container, sidecar proxy, or on-premises service so sensitive prompts never leave your infrastructure.",
    },
    {
      icon: Eye,
      title: "Comprehensive Auditability",
      description:
        "Inspect pre- and post-optimization token diffs for every call. Never wonder why a model behaved in a certain way.",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
          <Lock className="h-3.5 w-3.5" />
          <span>Architecture Principles</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Deterministic Control &amp;{" "}
          <span className="text-orange-500">Observability.</span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Context reduction must never compromise task success. <strong className="text-zinc-200">{BRAND_NAME}</strong>{" "}
          is engineered around developer transparency and configurable preservation guarantees.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#0c0c11] p-6 hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {p.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 text-center">
        <p className="text-xs text-zinc-400">
          * Engineering Notice: Optimization policies and security controls are configurable by your engineering team. We do not make unverified claims of third-party compliance, guaranteed benchmark quality, or regulatory certifications.
        </p>
      </div>
    </section>
  );
}
