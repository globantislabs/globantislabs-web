import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { WhoWeAre } from "@/components/site/who-we-are";
import { Services } from "@/components/site/services";
import { WhyGlobantis } from "@/components/site/why-globantis";
import { Consultation } from "@/components/site/consultation";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhoWeAre />
        <Services />
        <WhyGlobantis />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
