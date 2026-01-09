import {
  LandingHero,
  LandingFeatures,
  LandingBenefits,
  LandingCTA,
  LandingFooter,
} from "@/components/landing";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHero />
      <LandingFeatures />
      <LandingBenefits />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
