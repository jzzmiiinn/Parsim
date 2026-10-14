import { BRAND_NAME, BRAND_TAGLINE, GITHUB_REPO_URL } from "@/lib/constants";
import { Github } from "@/components/ui/icons";
import Logo from "@/components/ui/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-zinc-900 bg-[#070709] py-16 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white">
              <Logo className="h-7 w-9 shrink-0" />
              <span className="leading-none">
                {BRAND_NAME}
                <span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="mt-3.5 text-xs text-zinc-400 max-w-sm leading-relaxed">
              {BRAND_TAGLINE}. Automatically compress, deduplicate, and eliminate unnecessary context
              while preserving the knowledge agents need to succeed.
            </p>

            <div className="mt-5 flex items-center space-x-3">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Product Nav Column */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">
                  Optimization Engine
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-white transition-colors">
                  Telemetry &amp; Audit
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Developers
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#developer" className="hover:text-white transition-colors">
                  TypeScript SDK
                </a>
              </li>
              <li>
                <a href="#developer" className="hover:text-white transition-colors">
                  Python Library
                </a>
              </li>
              <li>
                <a href="#developer" className="hover:text-white transition-colors">
                  LangChain Adapter
                </a>
              </li>
              <li>
                <a href="#developer" className="hover:text-white transition-colors">
                  Streaming Proxy API
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Architecture FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Company Column */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Privacy &amp; Security
                </a>
              </li>
              <li>
                <a href="mailto:contact-placeholder@example.com" className="hover:text-white transition-colors">
                  Contact Placeholder
                </a>
              </li>
              <li>
                <span className="text-zinc-400">Security Disclosures</span>
              </li>
              <li>
                <span className="text-zinc-400">Terms Placeholder</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-zinc-900 pt-8 text-xs text-zinc-400 gap-4">
          <p>
            © {currentYear} {BRAND_NAME}. Built with React, TypeScript, and Vite.
          </p>
          <p className="text-center sm:text-right">
            Crafted for high-efficiency AI infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}
