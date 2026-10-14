import { Check, ArrowRight, Sparkles } from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function Pricing() {
  const plans = [
    {
      name: "Developer / Experimentation",
      badge: "For Local & Prototyping",
      pricePlaceholder: "Free Tier Placeholder",
      period: "for evaluation & personal use",
      description:
        "Everything needed to test context optimization on local agents and side projects.",
      features: [
        "Up to 5M tokens optimized/mo",
        "Standard heuristic compression",
        "Python & TypeScript SDK access",
        "Community support & docs",
        "Single-user dashboard",
      ],
      ctaText: "Start Building (Free)",
      highlighted: false,
    },
    {
      name: "Growing Teams",
      badge: "Most Popular Placeholder",
      pricePlaceholder: "Tier 2 Placeholder",
      period: "per active agent cluster / month",
      description:
        "For teams running production agent workflows with strict token budgets and latency targets.",
      features: [
        "Up to 100M tokens optimized/mo",
        "Advanced schema distillation & pruning",
        "Custom entity pinning policies",
        "Streaming proxy & LangChain adapter",
        "Shared team analytics & audit logs",
        "Priority developer support",
      ],
      ctaText: "Explore Team Plan",
      highlighted: true,
    },
    {
      name: "Enterprise",
      badge: "Dedicated & In-VPC",
      pricePlaceholder: "Custom Placeholder",
      period: "based on custom volume & SLA",
      description:
        "For enterprise organizations requiring private VPC deployment, custom SLAs, and dedicated support.",
      features: [
        "Unlimited context optimization",
        "Self-hosted / Private VPC deployment",
        "Zero-data-retention guarantees",
        "Custom retention algorithms & fine-tuning",
        "Dedicated infrastructure engineer SLA",
        "SOC2 audit logs & enterprise SSO",
      ],
      ctaText: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-400">
          Editable Pricing Tiers
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Transparent Plans for Every{" "}
          <span className="text-orange-500">Stage of Growth.</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Predictable context management that pays for itself in token savings on your very first billing cycle.
        </p>
      </div>

      {/* 3 Tier Grid */}
      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all ${
              plan.highlighted
                ? "border-2 border-orange-500 bg-[#0e0e14] shadow-2xl shadow-orange-500/10 lg:-translate-y-2"
                : "border border-zinc-800 bg-[#0c0c10] hover:border-zinc-700"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                Recommended Placeholder
              </div>
            )}

            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mt-4">
                <span className="font-mono text-2xl font-bold text-white">
                  {plan.pricePlaceholder}
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">{plan.period}</p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-zinc-400 border-t border-zinc-800/80 pt-4">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-orange-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-zinc-800/80 pt-6">
              <a
                href="#developer"
                className={`w-full inline-flex items-center justify-center space-x-1.5 rounded-full py-2.5 text-xs font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
                    : "border border-zinc-800 bg-zinc-900 text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Clarification Disclaimer */}
      <div className="mt-10 rounded-xl border border-zinc-800 bg-[#09090b] p-4 text-center">
        <p className="text-xs text-zinc-400">
          * Note: The plans above are editable placeholders designed for planning, team estimation, and feedback. No actual payment processing or billing system has been enabled.
        </p>
      </div>
    </section>
  );
}
