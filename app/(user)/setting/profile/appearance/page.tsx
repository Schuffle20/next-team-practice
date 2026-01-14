"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldTitle } from "@/components/ui/field";
import { Moon, Sun, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function AppearancePage() {
  const [theme, setTheme] = useState<Theme>("system");
  const [isSaving, setIsSaving] = useState(false);

  const handleThemeChange = async (newTheme: Theme) => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setTheme(newTheme);
    setIsSaving(false);
    
    // Apply theme (you can integrate with your theme provider here)
    if (typeof window !== "undefined") {
      if (newTheme === "system") {
        // Use system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", prefersDark);
      } else {
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
    }
  };

  const themes: { value: Theme; label: string; icon: React.ReactNode; description: string }[] = [
    {
      value: "light",
      label: "Light",
      icon: <Sun className="size-5" />,
      description: "Light mode",
    },
    {
      value: "dark",
      label: "Dark",
      icon: <Moon className="size-5" />,
      description: "Dark mode",
    },
    {
      value: "system",
      label: "System",
      icon: <Monitor className="size-5" />,
      description: "Use system preference",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize the appearance of the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel>
                <FieldTitle>Theme</FieldTitle>
                <FieldDescription>
                  Choose your preferred theme
                </FieldDescription>
              </FieldLabel>
              <FieldContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.value}
                      type="button"
                      onClick={() => handleThemeChange(themeOption.value)}
                      disabled={isSaving}
                      className={`
                        relative flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all
                        ${
                          theme === themeOption.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }
                        disabled:opacity-50 disabled:cursor-not-allowed
                      `}
                    >
                      <div className="text-primary">{themeOption.icon}</div>
                      <div className="text-center">
                        <div className="text-sm font-medium">{themeOption.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {themeOption.description}
                        </div>
                      </div>
                      {theme === themeOption.value && (
                        <div className="absolute top-2 right-2">
                          <div className="size-2 rounded-full bg-primary" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </FieldContent>
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>
    </div>
  );
}
