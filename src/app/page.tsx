import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { TrustStrip } from "@/components/site/trust-strip";
import { Services } from "@/components/site/services";
import { AISection } from "@/components/site/ai-section";
import { WhyGlobantis } from "@/components/site/why-globantis";
import { Consultation } from "@/components/site/consultation";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <AISection />
        <WhyGlobantis />
        <TrustStrip />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
