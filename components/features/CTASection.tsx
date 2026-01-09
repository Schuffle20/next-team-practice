import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButton.href}>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              {primaryButton.text}
            </Button>
          </Link>
          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto !border-white/20 !bg-transparent !text-white hover:!bg-white/10"
              >
                {secondaryButton.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
