"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SidebarTriggerAndLabel from "@/components/sidebar/SidebarTriggerAndLabel";
import { HugeiconsIcon } from "@hugeicons/react";
import { EyeIcon, EyeClosedIcon } from "@hugeicons/core-free-icons";

// Validation schema
const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, "Current password is required")
      .min(8, "Password must be at least 8 characters"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must not exceed 100 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from current password",
    path: ["newPassword"],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

export default function PasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: PasswordFormData) => {
    setIsSubmitting(true);
    setIsSaved(false);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Password change data:", data);
    setIsSubmitting(false);
    setIsSaved(true);
    reset();
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <SidebarTriggerAndLabel />
      
      <div className="flex flex-col gap-6 max-w-4xl">
        {/* Change Password Section */}
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              Update your password to keep your account secure. Make sure to use a strong password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Enter your current password"
                    {...register("currentPassword")}
                    aria-invalid={errors.currentPassword ? "true" : "false"}
                    className={errors.currentPassword ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <HugeiconsIcon
                      icon={showCurrentPassword ? EyeClosedIcon : EyeIcon}
                      className="size-4"
                    />
                  </button>
                </div>
                {errors.currentPassword && (
                  <p className="text-sm text-red-500">{errors.currentPassword.message}</p>
                )}
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                    {...register("newPassword")}
                    aria-invalid={errors.newPassword ? "true" : "false"}
                    className={errors.newPassword ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <HugeiconsIcon
                      icon={showNewPassword ? EyeClosedIcon : EyeIcon}
                      className="size-4"
                    />
                  </button>
                </div>
                {errors.newPassword && (
                  <p className="text-sm text-red-500">{errors.newPassword.message}</p>
                )}
                <div className="rounded-lg bg-muted/50 p-3 text-sm">
                  <p className="font-medium mb-2">Password requirements:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>At least 8 characters long</li>
                    <li>Contains at least one uppercase letter</li>
                    <li>Contains at least one lowercase letter</li>
                    <li>Contains at least one number</li>
                    <li>Contains at least one special character</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your new password"
                    {...register("confirmPassword")}
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    className={errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <HugeiconsIcon
                      icon={showConfirmPassword ? EyeClosedIcon : EyeIcon}
                      className="size-4"
                    />
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                )}
              </div>

              <Separator />

              <div className="flex justify-end gap-3">
                {isSaved && (
                  <span className="text-sm text-green-600 flex items-center">
                    Password updated successfully!
                  </span>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  {isSubmitting ? "Updating..." : "Update Password"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Security Tips */}
        <Card>
          <CardHeader>
            <CardTitle>Security Tips</CardTitle>
            <CardDescription>
              Best practices to keep your account secure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center">
                  <span className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold">1</span>
                </div>
                <div>
                  <p className="font-medium">Use a unique password</p>
                  <p className="text-sm text-muted-foreground">
                    Don&apos;t reuse passwords from other accounts
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center">
                  <span className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold">2</span>
                </div>
                <div>
                  <p className="font-medium">Change your password regularly</p>
                  <p className="text-sm text-muted-foreground">
                    Update your password every 3-6 months for better security
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center">
                  <span className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold">3</span>
                </div>
                <div>
                  <p className="font-medium">Enable two-factor authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
