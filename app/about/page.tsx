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
          Building meaningful digital experiences
        </h1>

        <p className="mx-auto max-w-2xl text-muted-foreground">
          We focus on creating simple, beautiful, and reliable products that
          solve real problems and feel great to use.
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
            Our mission is to design and build digital products that are easy to
            understand, accessible to everyone, and enjoyable to use. We
            believe great software should feel effortless.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            We envision a future where technology empowers people without
            overwhelming them — tools that blend naturally into everyday life
            and help users focus on what truly matters.
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
              We remove unnecessary complexity and focus on clarity in both
              design and code.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              From performance to typography, every detail matters to us.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consistency</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              A consistent experience builds trust and makes products feel
              professional.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h2 className="mb-4 text-2xl font-semibold">
          Want to work with us?
        </h2>

        <p className="mb-6 text-muted-foreground">
          We’re always open to new ideas, collaborations, and meaningful
          projects.
        </p>

        <Button size="lg">Get in touch</Button>
      </section>
    </main>
  )
}
