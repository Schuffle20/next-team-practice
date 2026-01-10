"use client"
import { useState } from "react"
import { contactSchema, ContactFormInputs } from "@/lib/validators/contact"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"


export default function ContactPage() {
  const [inputValues , setInputValues] = useState<ContactFormInputs>({
    name: "",
    email: "",
    message: ""
  })
  const [validateErrors, setValidateErrors] = useState<Partial<Record<keyof ContactFormInputs, string>>>({});

  function handleInputChange (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const { id, value } = e.target

   setInputValues((prev) => ({
    ...prev,
    [id]: value,
  }))

   setValidateErrors((prev) => ({
    ...prev,
    [id]: undefined,
  }))
  }
  function handleSubmit (e: React.FormEvent){
    e.preventDefault();

    const result = contactSchema.safeParse(inputValues);
    if(!result.success){
      const fieldErrors: typeof validateErrors = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ContactFormInputs;
        fieldErrors[field] = err.message
      })
      setValidateErrors(fieldErrors)
      return;
    }
setValidateErrors({})
  console.log("Valid form data:", result.data)
  }

  return (
    <main className="container mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <section className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          Contact
        </Badge>

        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Get in touch with us
        </h1>

        <p className="mx-auto max-w-2xl text-muted-foreground">
          Have a question, feedback, or a project in mind?  
          We’d love to hear from you.
        </p>
      </section>

      <Separator className="mb-12" />

      {/* Content */}
      <section className="grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Reach out through any of the following channels.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Email</p>
              <p>teapos@mail.com</p>
            </div>

            <div>
              <p className="font-medium text-foreground">Phone</p>
              <p>+95 9 123 456 789</p>
            </div>

            <div>
              <p className="font-medium text-foreground">Location</p>
              <p>Yangon, Myanmar</p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form and we’ll get back to you soon.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" value={inputValues.name} onChange={handleInputChange}
                 aria-invalid={validateErrors.name ? "true" : "false"}
                  className={validateErrors.name ? "border-red-500" : ""}
                />
                {validateErrors.name && <p className="text-sm text-red-500">{validateErrors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" value={inputValues.email} onChange={handleInputChange}   aria-invalid={validateErrors.email ? "true" : "false"}
  className={validateErrors.email ? "border-red-500" : ""}/>
                {validateErrors.email && <p className="text-sm text-red-500">{validateErrors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your idea or question..."
                  rows={5} value={inputValues.message} onChange={handleInputChange} aria-invalid={validateErrors.message ? "true" : "false"}
  className={validateErrors.message ? "border-red-500" : ""}
                />
                {validateErrors.message && (
  <p className="text-sm text-red-500">{validateErrors.message}</p>
)}
              </div>

              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer CTA */}
      <section className="mt-20 text-center">
        <h2 className="mb-3 text-2xl font-semibold">
          Let’s build something meaningful
        </h2>
        <p className="mb-6 text-muted-foreground">
          Whether it’s a small idea or a big vision, we’re ready to listen.
        </p>
      </section>
    </main>
  )
}
