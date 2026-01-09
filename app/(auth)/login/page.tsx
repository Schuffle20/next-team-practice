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

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side: Image */}
      <div className="hidden md:flex md:w-1/2 bg-cyan-50 items-center justify-center p-4">
        <div className="relative w-full max-w-md h-auto">
          <Image
            src="/login_register_image.png"
            alt="Login visual"
            width={500}
            height={600}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
      {/* Right Side: Login Card */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50/50 p-4">
        <Card className="w-full max-w-md shadow-lg border-t-4 border-t-cyan-600">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button
                  variant="link"
                  className="px-0 font-normal text-xs text-cyan-600"
                >
                  Forgot password?
                </Button>
              </div>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
              Sign In
            </Button>

            <div className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-cyan-600 hover:underline underline-offset-4 font-medium"
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
