import { CTA } from "@/components/cta";
import { FeatureGrid } from "@/components/feature-grid";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { IntegrationShowcase } from "@/components/integration-showcase";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <IntegrationShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
