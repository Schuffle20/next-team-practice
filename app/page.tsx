import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <HugeiconsIcon icon={ShoppingCart01Icon} className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">POS Pro</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost">Contact</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                <HugeiconsIcon icon={ZapIcon} className="h-3 w-3" />
                New: AI-Powered Analytics
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Modern POS System
                  <span className="text-primary block">Built for Growth</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                  Streamline your business operations with our all-in-one point of sale solution. 
                  Manage sales, inventory, and customers from one powerful platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Free Trial
                    <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Schedule Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/login_register_new.png"
                  alt="POS System Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <HugeiconsIcon icon={CreditCardIcon} className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">$12,450</div>
                    <div className="text-sm text-muted-foreground">Today&apos;s Sales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={ShoppingCart01Icon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Checkout</CardTitle>
                <CardDescription>
                  Fast and intuitive checkout process that keeps your customers happy and your lines moving.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={PieChartSquareIcon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Real-Time Analytics</CardTitle>
                <CardDescription>
                  Make data-driven decisions with comprehensive reports and insights into your business performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={UserGroupIcon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  Build lasting relationships with your customers through loyalty programs and personalized experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={ShieldCheck} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure Payments</CardTitle>
                <CardDescription>
                  Accept all payment types securely with PCI-compliant processing and fraud protection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={CreditCardIcon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Inventory Tracking</CardTitle>
                <CardDescription>
                  Never run out of stock with automated inventory management and low-stock alerts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={ZapIcon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Built for speed with cloud-based architecture that works seamlessly across all devices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                <div className="flex items-start gap-4">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Easy Setup</h3>
                    <p className="text-muted-foreground">
                      Get up and running in minutes with our intuitive setup process. No technical expertise required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Affordable Pricing</h3>
                    <p className="text-muted-foreground">
                      Transparent pricing with no hidden fees. Start with our free trial and scale as you grow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Our dedicated support team is always here to help you succeed, whenever you need us.
                    </p>
                  </div>
                </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of businesses already using POS Pro to streamline their operations and boost sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto !border-primary-foreground/20 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HugeiconsIcon icon={ShoppingCart01Icon} className="h-5 w-5 text-primary" />
                <span className="font-semibold">POS Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The modern point of sale system for growing businesses.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">Features</Link></li>
                <li><Link href="/about" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="/about" className="hover:text-foreground">Integrations</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/about" className="hover:text-foreground">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/contact" className="hover:text-foreground">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Documentation</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">API</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} POS Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
