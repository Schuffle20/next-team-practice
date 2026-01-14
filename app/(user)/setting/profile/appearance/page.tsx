"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SidebarTriggerAndLabel from "@/components/sidebar/SidebarTriggerAndLabel";
import { Sun, Moon, Monitor, Globe, Layout } from "lucide-react";

type Theme = "light" | "dark" | "system";
type Language = "en" | "es" | "fr" | "de" | "zh";
type FontSize = "small" | "medium" | "large";
type Density = "comfortable" | "compact" | "spacious";

export default function AppearancePage() {
  const [theme, setTheme] = useState<Theme>("system");
  const [language, setLanguage] = useState<Language>("en");
  const [fontSize, setFontSize] = useState<FontSize>("medium");
  const [density, setDensity] = useState<Density>("comfortable");
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    setIsSaved(false);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Appearance settings:", { theme, language, fontSize, density });
    setIsSaving(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
    { value: "zh", label: "中文" },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <SidebarTriggerAndLabel />
      
      <div className="flex flex-col gap-6 max-w-4xl">
        {/* Theme Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Monitor className="size-5 text-cyan-600" />
              <CardTitle>Theme</CardTitle>
            </div>
            <CardDescription>
              Choose how the app looks to you. Select a theme that matches your preference.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={theme} onValueChange={(value) => setTheme(value as Theme)}>
              <div className="grid gap-4 md:grid-cols-3">
                <label
                  className={`flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all hover:bg-muted/50 ${
                    theme === "light" ? "border-cyan-600 bg-cyan-50/50 dark:bg-cyan-900/10" : "border-border"
                  }`}
                >
                  <RadioGroupItem value="light" id="light" className="sr-only" />
                  <Sun className="size-8 mb-3 text-cyan-600" />
                  <span className="font-medium">Light</span>
                  <span className="text-sm text-muted-foreground text-center mt-1">
                    Clean and bright interface
                  </span>
                </label>

                <label
                  className={`flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all hover:bg-muted/50 ${
                    theme === "dark" ? "border-cyan-600 bg-cyan-50/50 dark:bg-cyan-900/10" : "border-border"
                  }`}
                >
                  <RadioGroupItem value="dark" id="dark" className="sr-only" />
                  <Moon className="size-8 mb-3 text-cyan-600" />
                  <span className="font-medium">Dark</span>
                  <span className="text-sm text-muted-foreground text-center mt-1">
                    Easy on the eyes at night
                  </span>
                </label>

                <label
                  className={`flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all hover:bg-muted/50 ${
                    theme === "system" ? "border-cyan-600 bg-cyan-50/50 dark:bg-cyan-900/10" : "border-border"
                  }`}
                >
                  <RadioGroupItem value="system" id="system" className="sr-only" />
                  <Monitor className="size-8 mb-3 text-cyan-600" />
                  <span className="font-medium">System</span>
                  <span className="text-sm text-muted-foreground text-center mt-1">
                    Match your device settings
                  </span>
                </label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Language & Region Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="size-5 text-cyan-600" />
              <CardTitle>Language & Region</CardTitle>
            </div>
            <CardDescription>
              Select your preferred language and regional settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                <SelectTrigger id="language" className="w-full md:w-[300px]">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                This will change the language for the entire application.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Display Settings Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Layout className="size-5 text-cyan-600" />
              <CardTitle>Display Settings</CardTitle>
            </div>
            <CardDescription>
              Customize how content is displayed in the application.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fontSize">Font Size</Label>
              <Select value={fontSize} onValueChange={(value) => setFontSize(value as FontSize)}>
                <SelectTrigger id="fontSize" className="w-full md:w-[300px]">
                  <SelectValue placeholder="Select font size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Aa</span>
                      <span>Small</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="medium">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Aa</span>
                      <span>Medium</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="large">
                    <div className="flex items-center gap-2">
                      <span className="text-base">Aa</span>
                      <span>Large</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Adjust the size of text throughout the application.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="density">Display Density</Label>
              <Select value={density} onValueChange={(value) => setDensity(value as Density)}>
                <SelectTrigger id="density" className="w-full md:w-[300px]">
                  <SelectValue placeholder="Select display density" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comfortable">
                    <div className="flex flex-col">
                      <span>Comfortable</span>
                      <span className="text-xs text-muted-foreground">More spacing between elements</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="compact">
                    <div className="flex flex-col">
                      <span>Compact</span>
                      <span className="text-xs text-muted-foreground">Less spacing, more content</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="spacious">
                    <div className="flex flex-col">
                      <span>Spacious</span>
                      <span className="text-xs text-muted-foreground">Maximum spacing for clarity</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Control the spacing and density of UI elements.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          {isSaved && (
            <span className="text-sm text-green-600 flex items-center">
              Appearance settings saved successfully!
            </span>
          )}
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
}
