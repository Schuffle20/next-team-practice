import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ShoppingCart01Icon,
  CreditCardIcon,
  PieChartSquareIcon,
  UserGroupIcon,
  ShieldCheck,
  ZapIcon,
} from "@hugeicons/core-free-icons";

const features = [
  {
    icon: ShoppingCart01Icon,
    title: "Easy Checkout",
    description: "Fast and intuitive checkout process that keeps your customers happy and your lines moving.",
  },
  {
    icon: PieChartSquareIcon,
    title: "Real-Time Analytics",
    description: "Make data-driven decisions with comprehensive reports and insights into your business performance.",
  },
  {
    icon: UserGroupIcon,
    title: "Customer Management",
    description: "Build lasting relationships with your customers through loyalty programs and personalized experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Accept all payment types securely with PCI-compliant processing and fraud protection.",
  },
  {
    icon: CreditCardIcon,
    title: "Inventory Tracking",
    description: "Never run out of stock with automated inventory management and low-stock alerts.",
  },
  {
    icon: ZapIcon,
    title: "Lightning Fast",
    description: "Built for speed with cloud-based architecture that works seamlessly across all devices.",
  },
];

export function LandingFeatures() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">Features</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to help you manage every aspect of your business efficiently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={feature.icon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
