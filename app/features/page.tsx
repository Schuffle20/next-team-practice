import {
  FeatureCategory,
  PageHeader,
  CTASection,
} from "@/components/features";
import {
  ShoppingCart01Icon,
  CreditCardIcon,
  PieChartSquareIcon,
  UserGroupIcon,
  ShieldCheck,
  ZapIcon,
  Store01Icon,
  File01Icon,
  SearchIcon,
  CloudUploadIcon,
  NotificationIcon,
  SettingsIcon,
  FileIcon,
  ComputerIcon,
  DownloadIcon,
} from "@hugeicons/core-free-icons";

const featureCategories = [
  {
    title: "Sales & Checkout",
    features: [
      {
        icon: ShoppingCart01Icon,
        title: "Fast Checkout",
        description: "Streamlined checkout process with support for multiple payment methods and quick item scanning.",
      },
      {
        icon: File01Icon,
        title: "Digital Receipts",
        description: "Send receipts via email or SMS. Print receipts on any compatible printer or go completely paperless.",
      },
      {
        icon: SearchIcon,
        title: "Barcode Scanning",
        description: "Quick product lookup with barcode scanning. Support for all major barcode formats including QR codes.",
      },
      {
        icon: CreditCardIcon,
        title: "Multiple Payment Methods",
        description: "Accept cash, cards, mobile payments, and digital wallets. All transactions are secure and PCI-compliant.",
      },
    ],
  },
  {
    title: "Inventory Management",
    features: [
      {
        icon: Store01Icon,
        title: "Real-Time Inventory",
        description: "Track stock levels in real-time across all locations. Get instant alerts when items are running low.",
      },
      {
        icon: FileIcon,
        title: "Product Management",
        description: "Organize products with categories, variants, and custom attributes. Bulk import and export capabilities.",
      },
      {
        icon: NotificationIcon,
        title: "Low Stock Alerts",
        description: "Automated notifications when inventory falls below your set thresholds. Never run out of stock again.",
      },
      {
        icon: CloudUploadIcon,
        title: "Multi-Location Support",
        description: "Manage inventory across multiple stores or warehouses. Transfer stock between locations seamlessly.",
      },
    ],
  },
  {
    title: "Analytics & Reports",
    features: [
      {
        icon: PieChartSquareIcon,
        title: "Sales Analytics",
        description: "Comprehensive sales reports with visual charts. Track revenue, profit margins, and sales trends over time.",
      },
      {
        icon: UserGroupIcon,
        title: "Customer Insights",
        description: "Understand your customers better with purchase history, preferences, and behavior analytics.",
      },
      {
        icon: FileIcon,
        title: "Custom Reports",
        description: "Generate custom reports for any metric. Export to PDF, Excel, or CSV for further analysis.",
      },
      {
        icon: ZapIcon,
        title: "Real-Time Dashboard",
        description: "Monitor your business performance in real-time with an intuitive dashboard showing key metrics.",
      },
    ],
  },
  {
    title: "Customer Management",
    features: [
      {
        icon: UserGroupIcon,
        title: "Customer Database",
        description: "Maintain a complete customer database with contact information, purchase history, and preferences.",
      },
      {
        icon: CreditCardIcon,
        title: "Loyalty Programs",
        description: "Create and manage loyalty programs to reward repeat customers and increase retention.",
      },
      {
        icon: NotificationIcon,
        title: "Marketing Tools",
        description: "Send targeted promotions, discounts, and announcements to your customer base via email or SMS.",
      },
      {
        icon: ShieldCheck,
        title: "Customer Support",
        description: "Track customer inquiries and support tickets. Maintain detailed notes for each customer interaction.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    features: [
      {
        icon: ShieldCheck,
        title: "PCI Compliance",
        description: "Fully PCI-DSS compliant payment processing. All card data is encrypted and securely handled.",
      },
      {
        icon: SettingsIcon,
        title: "User Permissions",
        description: "Granular access control with role-based permissions. Control what each staff member can access.",
      },
      {
        icon: FileIcon,
        title: "Audit Trails",
        description: "Complete audit logs for all transactions and system changes. Track every action for compliance.",
      },
      {
        icon: CloudUploadIcon,
        title: "Data Backup",
        description: "Automatic daily backups to secure cloud storage. Restore your data anytime with point-in-time recovery.",
      },
    ],
  },
  {
    title: "Hardware & Integration",
    features: [
      {
        icon: DownloadIcon,
        title: "Receipt Printers",
        description: "Compatible with all major receipt printer brands. Support for thermal and impact printers.",
      },
      {
        icon: SearchIcon,
        title: "Barcode Scanners",
        description: "Works with USB, Bluetooth, and wireless barcode scanners. Quick setup and configuration.",
      },
      {
        icon: ComputerIcon,
        title: "Mobile POS",
        description: "Run your POS on tablets, smartphones, or laptops. Works on iOS, Android, and Windows devices.",
      },
      {
        icon: CloudUploadIcon,
        title: "Cloud Sync",
        description: "All your data syncs automatically across all devices. Access your POS from anywhere, anytime.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <PageHeader
        badge="Features"
        title="Powerful Features for Your Business"
        description="Everything you need to run your business efficiently. From sales and inventory to analytics and customer management."
      />

      {/* Features Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {featureCategories.map((category, categoryIndex) => (
            <FeatureCategory
              key={categoryIndex}
              title={category.title}
              features={category.features}
            />
          ))}
        </div>
      </div>

      <CTASection
        title="Ready to Get Started?"
        description="Experience all these features and more. Start your free trial today."
        primaryButton={{
          text: "Start Free Trial",
          href: "/getstarted",
        }}
        secondaryButton={{
          text: "View Pricing",
          href: "/pricing",
        }}
      />
    </main>
  );
}
