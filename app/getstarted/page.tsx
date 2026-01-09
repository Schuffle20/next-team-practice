"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Store01Icon,
  Coffee01Icon,
  ShoppingBag01Icon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";

const businessTypes = [
  { id: "retail", title: "Retail", icon: ShoppingBag01Icon, desc: "Clothing, electronics, or general goods." },
  { id: "fnb", title: "Food & Beverage", icon: Coffee01Icon, desc: "Restaurants, cafes, or food trucks." },
  { id: "service", title: "Services", icon: Store01Icon, desc: "Salons, repairs, or professional services." },
];

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50/50 p-6">
      <div className="max-w-2xl w-full space-y-8">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-8 max-w-xs mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= s ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-500"
              }`}>
                {step > s ? <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-5 w-5" /> : s}
              </div>
              {s < 3 && <div className={`h-1 w-12 mx-2 ${step > s ? "bg-cyan-600" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <Card className="border-t-4 border-t-cyan-600 shadow-xl animate-in fade-in zoom-in duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">What’s your business type?</CardTitle>
              <CardDescription>We’ll customize your POS experience based on your industry.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`cursor-pointer flex flex-col items-center p-6 rounded-xl border-2 transition-all ${
                    selectedType === type.id 
                      ? "border-cyan-600 bg-cyan-50/50 shadow-md" 
                      : "border-gray-100 hover:border-cyan-200 hover:bg-slate-50"
                  }`}
                >
                  <HugeiconsIcon icon={type.icon} className={`h-10 w-10 mb-4 ${selectedType === type.id ? "text-cyan-600" : "text-gray-400"}`} />
                  <span className="font-semibold text-gray-900">{type.title}</span>
                  <p className="text-xs text-center text-gray-500 mt-2">{type.desc}</p>
                </button>
              ))}
            </CardContent>
            <CardFooter>
              <Button 
                disabled={!selectedType} 
                onClick={() => setStep(2)} 
                className="w-full bg-cyan-600 hover:bg-cyan-700 py-6 text-lg"
              >
                Continue <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card className="border-t-4 border-t-cyan-600 shadow-xl animate-in slide-in-from-right duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Hardware & Setup</CardTitle>
              <CardDescription>How would you like to run your POS?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 bg-white">
                <div className="bg-cyan-100 p-3 rounded-full"><HugeiconsIcon icon={Store01Icon} className="text-cyan-600" /></div>
                <div className="flex-1">
                  <p className="font-medium">Software Only</p>
                  <p className="text-xs text-gray-500">Run on your existing iPad, Android, or Laptop.</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setStep(3)}>Select</Button>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 bg-white">
                <div className="bg-cyan-100 p-3 rounded-full"><HugeiconsIcon icon={ShoppingBag01Icon} className="text-cyan-600" /></div>
                <div className="flex-1">
                  <p className="font-medium">All-in-One Terminal</p>
                  <p className="text-xs text-gray-500">We ship you a professional terminal + printer.</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setStep(3)}>Select</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" onClick={() => setStep(1)} className="w-full text-gray-500">Go Back</Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
             <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-12 w-12" />
             </div>
             <h2 className="text-3xl font-bold">You&apos;re almost there!</h2>
             <p className="text-gray-500 max-w-sm mx-auto">Create your admin account to access your new {selectedType} dashboard.</p>
             <div className="flex flex-col gap-3">
                <Link href="/register">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 py-6 text-lg">Create Account</Button>
                </Link>
                <Link href="/login">
                  <Button variant="ghost" className="w-full">Already have an account? Sign in</Button>
                </Link>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}