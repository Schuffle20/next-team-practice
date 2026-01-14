"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, Shield, Palette } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="profile-layout" className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your profile and account settings
        </p>
      </div>
      <Tabs>
        <TabsList>
          <TabsTrigger href="/setting/profile">
            <User className="size-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger href="/setting/profile/change-password">
            <Lock className="size-4" />
            Password
          </TabsTrigger>
          <TabsTrigger href="/setting/profile/two-factor">
            <Shield className="size-4" />
            Two-Factor Auth
          </TabsTrigger>
          <TabsTrigger href="/setting/profile/appearance">
            <Palette className="size-4" />
            Appearance
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {children}
    </div>
  );
}
