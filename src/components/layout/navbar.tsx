import { useState } from "react";
import Link from "@/components/ui/link";
import Logo from "@/components/ui/logo";
import useScroll from "@/hooks/use-scroll";
import { BRAND_NAME, GITHUB_REPO_URL } from "@/lib/constants";
import { Github } from "@/components/ui/icons";
import { Menu, X, ArrowRight } from "lucide-react";

export default function NavBar() {
  const scrolled = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Product", href: "#problem" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Documentation", href: "#developer" },
    { name: "Analytics", href: "#analytics" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex w-full justify-center transition-all duration-200 ${
        scrolled || mobileMenuOpen
          ? "border-b border-zinc-800/80 bg-[#09090b]/90 backdrop-blur-xl shadow-lg shadow-black/40"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <Logo className="h-7 w-9 shrink-0" />
          <span className="leading-none">
            {BRAND_NAME}
            <span className="text-orange-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center space-x-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-lg px-3.5 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden items-center space-x-3 sm:flex">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            title="Star on GitHub"
          >
            <Github className="h-4 w-4" />
            <span className="hidden md:inline">GitHub</span>
          </a>

          <a
            href="#developer"
            className="group relative flex items-center space-x-1.5 rounded-full bg-orange-500 px-4 py-1.5 text-sm font-medium text-white shadow-[0_0_20px_-3px_rgba(249,115,22,0.45)] transition-all hover:bg-orange-600 hover:shadow-[0_0_25px_-2px_rgba(249,115,22,0.6)]"
          >
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <a
            href="#developer"
            className="rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white sm:hidden"
          >
            Get Started
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-800/60 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full border-b border-zinc-800 bg-[#09090b]/98 px-6 py-6 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-800 flex flex-col space-y-3">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 rounded-lg border border-zinc-800 bg-zinc-900 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span>View on GitHub</span>
              </a>
              <a
                href="#developer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 rounded-full bg-orange-500 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-500/25"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
