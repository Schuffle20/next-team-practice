import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogs = [{
    title: "Introducing POS Pro System",
    description: "Learn how POS Pro helps retail and restaurant businesses manage sales efficiently.",
    tag: "Announcement",
    date: "Jan 10, 2026",
  },
  {
    title: "How POS Pro Improves Inventory Control",
    description: "Understand real-time inventory tracking and low-stock alerts in POS Pro.",
    tag: "Inventory",
    date: "Jan 6, 2026",
  },
  {
    title: "Secure Payments with POS Pro",
    description: "Explore supported payment methods and secure transaction handling.",
    tag: "Payments",
    date: "Jan 2, 2026",
  },
]

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <header>
        <h1 className="text-4xl font-bold">POS Pro Blog</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Product updates, business tips, and guides for using POS Pro System.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <Badge className="mb-2 w-fit">{blog.tag}</Badge>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                {blog.description}
              </p>
            </CardContent>

            <CardFooter className="mt-auto flex justify-between">
              <span className="text-xs text-muted-foreground">
                {blog.date}
              </span>
              <Button variant="secondary" size="sm">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
