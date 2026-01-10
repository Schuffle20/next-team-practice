
"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!")
      return
    }
   
    alert("Password changed successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="p-3 justify-center items-center font-serif text-xl">Change Password</CardTitle>
          <CardDescription>Update your account password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <div>
            <Label htmlFor="current" className="font-serif text-sm mb-3 ">Current Password</Label>
            <Input
              id="current"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="new" className="font-serif text-sm mb-3 ">New Password</Label>
            <Input
              id="new"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="confirm" className="font-serif text-sm mb-3 ">Confirm New Password</Label>
            <Input
              id="confirm"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Button className="w-full p-5 font-serif bg-blue-500 font-bold" onClick={handleChangePassword}>
            Update Password
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
