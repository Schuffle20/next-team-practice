import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function DocumentationPage() {
  return (
    <div className="space-y-10 p-10">

      
      <section>
        <Badge className="mb-3">POS Pro System</Badge>
        <h1 className="text-4xl font-bold">Introduction</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          POS Pro System is a professional point of sale solution designed
          for retail stores, restaurants, and service businesses.
        </p>
      </section>

      <Separator />

      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">System Overview</h2>
        <p className="text-muted-foreground">
          POS Pro provides fast billing, inventory management, customer tracking,
          and detailed reports in a single unified system.
        </p>
      </section>

      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">User Roles</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Admin:</strong> Full system access and configuration</li>
          <li><strong>Manager:</strong> Reports and inventory control</li>
          <li><strong>Cashier:</strong> Sales and billing operations</li>
        </ul>
      </section>

      <Separator />

      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sales Workflow</h2>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2">
          <li>Select products</li>
          <li>Adjust quantities</li>
          <li>Apply discounts (if allowed)</li>
          <li>Choose payment method</li>
          <li>Generate receipt</li>
        </ol>
      </section>

      <Separator />

     
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Reports & Analytics</h2>
        <p className="text-muted-foreground">
          POS Pro offers daily sales reports, inventory summaries, and
          profit analysis to support better business decisions.
        </p>
      </section>
    </div>
  )
}
