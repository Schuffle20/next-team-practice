import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <section className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          About Us
        </Badge>

        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Powering tea shops with a simple POS system
        </h1>

        <p className="mx-auto max-w-2xl text-muted-foreground">
          We build an easy-to-use Point of Sale system designed especially for tea
  shops and small restaurants — helping you manage orders, payments, and daily
  operations with confidence.
        </p>
      </section>

      <Separator className="mb-12" />

      {/* Mission & Vision */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Our mission is to help tea shops and restaurants run smoothly by providing a
  POS system that is fast, simple, and reliable. We focus on reducing manual
  work, minimizing mistakes, and making daily operations easier for shop
  owners and staff.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
           We envision a future where every tea shop — from small street stalls to busy
  cafés — can use modern technology without complexity. Our goal is to make
  digital tools feel natural, affordable, and truly helpful for everyday
  business.
          </CardContent>
        </Card>
      </section>

      {/* Values */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Our Core Values</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Simplicity</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
             Tea shops are busy places. Our POS system is designed to be easy to learn and
  quick to use, even during peak hours.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reliability</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We focus on stability and accuracy — from order management to daily sales
  reports — so shop owners can trust the system every day.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consistency</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
               A consistent workflow helps staff work faster and reduces confusion. We make
  sure the experience stays familiar across all devices and shifts.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h2 className="mb-4 text-2xl font-semibold">
          Ready to improve your tea shop operations?
        </h2>

        <p className="mb-6 text-muted-foreground">
          Whether you run a small tea shop or a growing restaurant, our POS system is
  here to support your daily business.
        </p>

        <Button size="lg">Contact Us</Button>
      </section>
    </main>
  )
}
