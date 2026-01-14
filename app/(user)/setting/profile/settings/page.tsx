"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import SidebarTriggerAndLabel from "@/components/sidebar/SidebarTriggerAndLabel";

// Validation schema
const settingsSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must not exceed 100 characters"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      "Please enter a valid phone number"
    )
    .max(20, "Phone number must not exceed 20 characters"),
  bio: z.string().max(500, "Bio must not exceed 500 characters").optional(),
  location: z.string().max(100, "Location must not exceed 100 characters").optional(),
  website: z
    .string()
    .url("Please enter a valid URL")
    .max(200, "Website must not exceed 200 characters")
    .optional()
    .or(z.literal("")),
  emailNotifications: z.boolean(),
  pushNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  securityAlerts: z.boolean(),
});

type SettingsFormData = z.infer<typeof settingsSchema>;

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      bio: "",
      location: "",
      website: "",
      emailNotifications: true,
      pushNotifications: true,
      marketingEmails: false,
      securityAlerts: true,
    },
  });

  const onSubmit = async (data: SettingsFormData) => {
    setIsSubmitting(true);
    setIsSaved(false);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Settings data:", data);
    setIsSubmitting(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <SidebarTriggerAndLabel />
      
      <div className="flex flex-col gap-6 max-w-4xl">
        {/* Profile Information Section */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your personal information and how others see you on the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    {...register("firstName")}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    {...register("lastName")}
                    aria-invalid={errors.lastName ? "true" : "false"}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  {...register("phone")}
                  aria-invalid={errors.phone ? "true" : "false"}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  rows={4}
                  {...register("bio")}
                  aria-invalid={errors.bio ? "true" : "false"}
                  className={errors.bio ? "border-red-500" : ""}
                />
                {errors.bio && (
                  <p className="text-sm text-red-500">{errors.bio.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    {...register("location")}
                    aria-invalid={errors.location ? "true" : "false"}
                    className={errors.location ? "border-red-500" : ""}
                  />
                  {errors.location && (
                    <p className="text-sm text-red-500">{errors.location.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://example.com"
                    {...register("website")}
                    aria-invalid={errors.website ? "true" : "false"}
                    className={errors.website ? "border-red-500" : ""}
                  />
                  {errors.website && (
                    <p className="text-sm text-red-500">{errors.website.message}</p>
                  )}
                </div>
              </div>

              <Separator />

              {/* Notification Preferences */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose how you want to be notified about updates and activities.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Controller
                      name="emailNotifications"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="emailNotifications"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <div className="flex-1">
                      <Label htmlFor="emailNotifications" className="cursor-pointer">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Controller
                      name="pushNotifications"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="pushNotifications"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <div className="flex-1">
                      <Label htmlFor="pushNotifications" className="cursor-pointer">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications in your browser
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Controller
                      name="marketingEmails"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="marketingEmails"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <div className="flex-1">
                      <Label htmlFor="marketingEmails" className="cursor-pointer">
                        Marketing Emails
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new features and promotions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Controller
                      name="securityAlerts"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="securityAlerts"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <div className="flex-1">
                      <Label htmlFor="securityAlerts" className="cursor-pointer">
                        Security Alerts
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts about important security events
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end gap-3">
                {isSaved && (
                  <span className="text-sm text-green-600 flex items-center">
                    Settings saved successfully!
                  </span>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
