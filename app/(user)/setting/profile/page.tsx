"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSettings from "./components/ProfileSettings";
import PasswordSettings from "./components/PasswordSettings";
import TwoFactorAuthSettings from "./components/TwoFactorAuthSettings";
import AppearanceSettings from "./components/AppearanceSettings";

export default function ProfilePage() {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex flex-col gap-6 max-w-4xl">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="two-factor">Two-Factor Auth</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <ProfileSettings />
          </TabsContent>

          <TabsContent value="password" className="space-y-6 mt-6">
            <PasswordSettings />
          </TabsContent>

          <TabsContent value="two-factor" className="space-y-6 mt-6">
            <TwoFactorAuthSettings />
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6 mt-6">
            <AppearanceSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
