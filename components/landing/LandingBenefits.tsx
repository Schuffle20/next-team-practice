import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

const benefits = [
  {
    title: "Easy Setup",
    description: "Get up and running in minutes with our intuitive setup process. No technical expertise required.",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden fees. Start with our free trial and scale as you grow.",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help you succeed, whenever you need us.",
  },
];

export function LandingBenefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/login_register_image.png"
                alt="POS System Features"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary">Why Choose Us</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Built for Businesses of All Sizes
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re a small boutique or a growing chain, our POS system scales with your business.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/register">
              <Button size="lg">
                Get Started Today
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
