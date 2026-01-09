"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // Run: pnpm dlx shadcn@latest add checkbox

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side: Image */}
      <div className="hidden md:flex md:w-1/2 bg-cyan-50 items-center justify-center p-4">
        <div className="relative w-full max-w-md h-auto">
          <Image
            src="/login_register_image.png"
            alt="Register visual"
            width={500}
            height={600}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
      {/* Right Side: Register Card */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50/50 p-4">
        <Card className="w-full max-w-md shadow-lg border-t-4 border-t-cyan-600">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your information below to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" required />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-cyan-600 hover:underline">
                  terms and conditions
                </Link>
              </label>
            </div>

            <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6">
              Create Account
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-cyan-600 hover:underline underline-offset-4 font-medium"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
        </Card>
      </div>
    </div>
  );
}
