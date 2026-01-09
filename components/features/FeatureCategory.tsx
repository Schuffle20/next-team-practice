import { FeatureCard } from "./FeatureCard";
import { type IconSvgElement } from "@hugeicons/react";

interface Feature {
  icon: IconSvgElement;
  title: string;
  description: string;
}

interface FeatureCategoryProps {
  title: string;
  features: Feature[];
}

export function FeatureCategory({ title, features }: FeatureCategoryProps) {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
