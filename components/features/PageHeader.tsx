import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {badge && (
          <Badge variant="secondary" className="mb-4">
            {badge}
          </Badge>
        )}
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty text-gray-900">
          {title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
