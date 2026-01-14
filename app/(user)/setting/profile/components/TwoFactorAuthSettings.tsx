"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Smartphone } from "lucide-react";

export default function TwoFactorAuthSettings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleToggle = async () => {
    if (!isEnabled) {
      // Enable 2FA - would typically show QR code setup
      setIsSaving(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsEnabled(true);
      setIsSaving(false);
    } else {
      // Disable 2FA
      setIsSaving(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsEnabled(false);
      setIsSaving(false);
    }
  };

  const handleVerify = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Verifying code:", verificationCode);
    setIsSaving(false);
    setVerificationCode("");
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-cyan-600" />
          <CardTitle>Two Factor Authentication</CardTitle>
        </div>
        <CardDescription>
          Add an additional layer of security to your account by enabling two-factor authentication.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isEnabled ? (
          <>
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex gap-3">
                <Smartphone className="size-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Two-factor authentication is not enabled</p>
                  <p className="text-sm text-muted-foreground">
                    When two-factor authentication is enabled, you will be prompted for a secure,
                    random token during authentication. You may retrieve this token from your
                    phone&apos;s authenticator application.
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleToggle}
              disabled={isSaving}
              className="bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              {isSaving ? "Enabling..." : "Enable"}
            </Button>
          </>
        ) : (
          <>
            <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
              <div className="flex gap-3">
                <ShieldCheck className="size-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100 mb-1">
                    Two-factor authentication is enabled
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Your account is now more secure with two-factor authentication enabled.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="verificationCode">Verification Code</Label>
                <Input
                  id="verificationCode"
                  type="text"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength={6}
                />
                <p className="text-sm text-muted-foreground">
                  Enter the verification code from your authenticator app to verify setup.
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleVerify}
                  disabled={isSaving || !verificationCode}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  {isSaving ? "Verifying..." : "Verify"}
                </Button>
                <Button
                  onClick={handleToggle}
                  disabled={isSaving}
                  variant="outline"
                >
                  {isSaving ? "Disabling..." : "Disable"}
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
