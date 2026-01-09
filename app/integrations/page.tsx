import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CreditCardIcon,
  MailIcon,
  ShoppingCart01Icon,
  CloudUploadIcon,
  FileIcon,
  SettingsIcon,
  NotificationIcon,
  UserGroupIcon,
  Store01Icon,
  PieChartSquareIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

const integrationCategories = [
  {
    title: "Payment Processors",
    description: "Accept payments from customers with trusted payment gateways",
    integrations: [
      {
        name: "Stripe",
        description: "Accept credit cards, debit cards, and digital wallets securely.",
        icon: CreditCardIcon,
        status: "Available",
        category: "Payment",
      },
      {
        name: "PayPal",
        description: "Enable PayPal payments for customers who prefer this method.",
        icon: CreditCardIcon,
        status: "Available",
        category: "Payment",
      },
      {
        name: "Square",
        description: "Integrated payment processing with Square's hardware and software.",
        icon: CreditCardIcon,
        status: "Available",
        category: "Payment",
      },
      {
        name: "Razorpay",
        description: "Payment gateway popular in Asia with support for local payment methods.",
        icon: CreditCardIcon,
        status: "Available",
        category: "Payment",
      },
    ],
  },
  {
    title: "E-commerce Platforms",
    description: "Sync your inventory and sales with popular online stores",
    integrations: [
      {
        name: "Shopify",
        description: "Sync products, inventory, and orders between your POS and Shopify store.",
        icon: ShoppingCart01Icon,
        status: "Available",
        category: "E-commerce",
      },
      {
        name: "WooCommerce",
        description: "Connect your WordPress store with real-time inventory synchronization.",
        icon: ShoppingCart01Icon,
        status: "Available",
        category: "E-commerce",
      },
      {
        name: "Amazon",
        description: "Manage Amazon listings and sync inventory across all channels.",
        icon: Store01Icon,
        status: "Coming Soon",
        category: "E-commerce",
      },
      {
        name: "Etsy",
        description: "Sync your handmade products and manage orders from Etsy.",
        icon: Store01Icon,
        status: "Coming Soon",
        category: "E-commerce",
      },
    ],
  },
  {
    title: "Accounting & Finance",
    description: "Keep your books in order with accounting software integrations",
    integrations: [
      {
        name: "QuickBooks",
        description: "Automatically sync sales, expenses, and inventory to QuickBooks.",
        icon: FileIcon,
        status: "Available",
        category: "Accounting",
      },
      {
        name: "Xero",
        description: "Real-time synchronization of financial data with Xero accounting.",
        icon: FileIcon,
        status: "Available",
        category: "Accounting",
      },
      {
        name: "FreshBooks",
        description: "Streamline invoicing and expense tracking with FreshBooks integration.",
        icon: FileIcon,
        status: "Available",
        category: "Accounting",
      },
      {
        name: "Sage",
        description: "Connect with Sage for comprehensive business accounting solutions.",
        icon: FileIcon,
        status: "Coming Soon",
        category: "Accounting",
      },
    ],
  },
  {
    title: "Marketing & Communication",
    description: "Reach your customers through email, SMS, and social media",
    integrations: [
      {
        name: "Mailchimp",
        description: "Sync customer data and send targeted email campaigns to your customers.",
        icon: MailIcon,
        status: "Available",
        category: "Marketing",
      },
      {
        name: "SendGrid",
        description: "Transactional emails and marketing campaigns with advanced analytics.",
        icon: MailIcon,
        status: "Available",
        category: "Marketing",
      },
      {
        name: "Twilio",
        description: "Send SMS notifications, receipts, and alerts to customers.",
        icon: NotificationIcon,
        status: "Available",
        category: "Marketing",
      },
      {
        name: "Facebook",
        description: "Connect your Facebook page and manage customer interactions.",
        icon: UserGroupIcon,
        status: "Coming Soon",
        category: "Marketing",
      },
    ],
  },
  {
    title: "Analytics & Reporting",
    description: "Get deeper insights with advanced analytics tools",
    integrations: [
      {
        name: "Google Analytics",
        description: "Track customer behavior and sales data with Google Analytics.",
        icon: PieChartSquareIcon,
        status: "Available",
        category: "Analytics",
      },
      {
        name: "Tableau",
        description: "Create advanced visualizations and dashboards with your sales data.",
        icon: PieChartSquareIcon,
        status: "Coming Soon",
        category: "Analytics",
      },
      {
        name: "Power BI",
        description: "Build comprehensive business intelligence reports and dashboards.",
        icon: PieChartSquareIcon,
        status: "Coming Soon",
        category: "Analytics",
      },
    ],
  },
  {
    title: "Inventory & Shipping",
    description: "Streamline inventory management and shipping operations",
    integrations: [
      {
        name: "ShipStation",
        description: "Automate shipping label creation and order fulfillment.",
        icon: CloudUploadIcon,
        status: "Available",
        category: "Shipping",
      },
      {
        name: "FedEx",
        description: "Print shipping labels and track packages directly from your POS.",
        icon: CloudUploadIcon,
        status: "Available",
        category: "Shipping",
      },
      {
        name: "UPS",
        description: "Integrated shipping with UPS for domestic and international deliveries.",
        icon: CloudUploadIcon,
        status: "Available",
        category: "Shipping",
      },
      {
        name: "DHL",
        description: "Connect with DHL for express shipping and logistics management.",
        icon: CloudUploadIcon,
        status: "Coming Soon",
        category: "Shipping",
      },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Header Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Integrations
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty text-gray-900">
            Connect with Your Favorite Tools
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Seamlessly integrate with payment processors, e-commerce platforms, accounting software, and more to streamline your business operations.
          </p>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {integrationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.integrations.map((integration, integrationIndex) => (
                  <Card
                    key={integrationIndex}
                    className="border border-gray-200 hover:shadow-lg transition-shadow relative"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-12 w-12 rounded-lg bg-cyan-50 flex items-center justify-center">
                          <HugeiconsIcon
                            icon={integration.icon}
                            className="h-6 w-6 text-cyan-600"
                          />
                        </div>
                        <Badge
                          variant={integration.status === "Available" ? "default" : "secondary"}
                          className={
                            integration.status === "Available"
                              ? "bg-green-100 text-green-700 hover:bg-green-100"
                              : ""
                          }
                        >
                          {integration.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg mb-2">{integration.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {integration.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{integration.category}</span>
                        {integration.status === "Available" && (
                          <Button variant="ghost" size="sm" className="text-cyan-600 hover:text-cyan-700">
                            Connect →
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Section */}
      <div className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="h-16 w-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-6">
            <HugeiconsIcon icon={SettingsIcon} className="h-8 w-8 text-cyan-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Build Your Own Integration
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Need a custom integration? Our powerful API allows you to connect with any service or build your own solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              View API Documentation
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Connect Your Tools?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
            Start integrating your favorite services today. Most integrations take just minutes to set up.
          </p>
          <Link href="/getstarted">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
