import cx from "classnames";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { sfPro, inter } from "@/lib/fonts";
import { ClerkProvider } from "@/lib/auth";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/sections/hero";
import Problem from "@/sections/problem";
import Solution from "@/sections/solution";
import HowItWorks from "@/sections/how-it-works";
import DeveloperExperience from "@/sections/developer-experience";
import Benefits from "@/sections/benefits";
import AnalyticsPreview from "@/sections/analytics-preview";
import Integrations from "@/sections/integrations";
import Security from "@/sections/security";
import Pricing from "@/sections/pricing";
import FAQ from "@/sections/faq";
import FinalCTA from "@/sections/final-cta";

export default function App() {
  return (
    <ClerkProvider>
      <div
        className={cx(
          sfPro.variable,
          inter.variable,
          "relative min-h-screen font-sans bg-[#09090b] text-zinc-100 selection:bg-orange-500/25 selection:text-orange-200 antialiased overflow-x-hidden",
        )}
      >
        {/* Subtle orange ambient glow at the top */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(249,115,22,0.14),transparent)]"
        />

        {/* Subtle dark technical mesh grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        <Suspense fallback="...">
          <Navbar />
        </Suspense>

        <main className="relative z-10 flex min-h-screen w-full flex-col items-center pt-16 sm:pt-20">
          <div className="flex w-full flex-col items-center">
            <Hero />
            <Problem />
            <Solution />
            <HowItWorks />
            <DeveloperExperience />
            <Benefits />
            <AnalyticsPreview />
            <Integrations />
            <Security />
            <Pricing />
            <FAQ />
            <FinalCTA />
          </div>
        </main>

        <Footer />
        <VercelAnalytics />
      </div>
    </ClerkProvider>
  );
}
