"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldTitle } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Smartphone, Key } from "lucide-react";

export default function TwoFactorAuthPage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleToggle = async (checked: boolean) => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsEnabled(checked);
    setIsSaving(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field orientation="horizontal">
              <FieldLabel className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Shield className="size-5 text-primary" />
                  </div>
                  <div>
                    <FieldTitle>Enable Two-Factor Authentication</FieldTitle>
                    <FieldDescription>
                      Require a verification code in addition to your password when signing in
                    </FieldDescription>
                  </div>
                </div>
              </FieldLabel>
              <FieldContent>
                <Checkbox
                  checked={isEnabled}
                  onCheckedChange={handleToggle}
                  disabled={isSaving}
                />
              </FieldContent>
            </Field>
          </FieldGroup>

          {isEnabled && (
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-lg border border-border bg-muted/50">
                <div className="flex items-start gap-3">
                  <Smartphone className="size-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium mb-1">Authenticator App</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use an authenticator app to generate verification codes
                    </p>
                    <Button variant="outline" size="sm">
                      <Key className="size-4" />
                      Set up authenticator app
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-border bg-muted/50">
                <div className="flex items-start gap-3">
                  <Key className="size-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium mb-1">Recovery Codes</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Save these codes in a safe place. You can use them to access your account if you lose your device.
                    </p>
                    <Button variant="outline" size="sm">
                      View recovery codes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
