import { PageShell } from "@/components/site/page-shell";
import { Hero } from "@/components/site/sections/hero";
import { WhoWeAre } from "@/components/site/sections/who-we-are";
import { Services } from "@/components/site/sections/services-grid";
import { IndustriesStrip } from "@/components/site/sections/industries-strip";
import { WhyGlobantis } from "@/components/site/sections/why-globantis";
import { Consultation } from "@/components/site/sections/consultation";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <WhoWeAre />
      <Services />
      <IndustriesStrip />
      <WhyGlobantis />
      <Consultation />
    </PageShell>
  );
}
