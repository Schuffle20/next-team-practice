"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

// Validation schema
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must not exceed 100 characters"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    // Handle form submission
    console.log("Forgot password data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    // Add your API call here
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex">
        {/* Left Side: Image */}
        <div className="hidden md:flex md:w-1/2 bg-cyan-50 items-center justify-center p-4">
          <div className="relative w-full max-w-md h-auto">
            <Image
              src="/login_register_new.png"
              alt="Password reset visual"
              width={500}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* Right Side: Success Card */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50/50 p-4">
          <Card className="w-full max-w-md shadow-lg border-t-4 border-t-green-500">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">
                Check your email
              </CardTitle>
              <CardDescription className="pt-2">
                We&apos;ve sent a password reset link to{" "}
                <span className="font-semibold text-foreground">
                  {getValues("email")}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted/50 p-4 text-sm">
                <p className="text-muted-foreground">
                  Click the link in the email to reset your password. If you
                  don&apos;t see the email, check your spam folder.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="w-full"
                >
                  Send another email
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="text-sm text-center text-muted-foreground">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="text-cyan-600 hover:underline underline-offset-4 font-medium"
                >
                  Back to login
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side: Image */}
      <div className="hidden md:flex md:w-1/2 bg-cyan-50 items-center justify-center p-4">
        <div className="relative w-full max-w-md h-auto">
          <Image
            src="/login_register_new.png"
            alt="Password reset visual"
            width={500}
            height={600}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
      {/* Right Side: Forgot Password Card */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50/50 p-4">
        <Card className="w-full max-w-md shadow-lg border-t-4 border-t-cyan-600">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Forgot password?
            </CardTitle>
            <CardDescription className="text-center">
              No worries, we&apos;ll send you reset instructions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Reset password"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="text-sm text-center text-muted-foreground">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-cyan-600 hover:underline underline-offset-4 font-medium"
              >
                Back to login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
