import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { type IconSvgElement } from "@hugeicons/react";

interface FeatureCardProps {
  icon: IconSvgElement;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-4">
          <HugeiconsIcon icon={icon} className="h-6 w-6 text-cyan-600" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
