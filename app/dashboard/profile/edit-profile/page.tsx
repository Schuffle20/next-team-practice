"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function EditProfilePage() {
  const [name, setName] = useState("Mg Mg")
  const [email, setEmail] = useState("mg.mg@example.com")
  const [bio, setBio] = useState("Passionate developer. Loves React, Next.js, shadcn UI.")

  const handleSave = () => {
    
    alert("Profile updated!")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="w-full justify-center items-center font-serif text-2xl p-4">Edit Profile</CardTitle>
          <CardDescription className="font-serif ">Update your account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name" className="font-serif text-sm mb-2">Name</Label>
            <Input className="text-gray-400" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="email" className="font-serif text-sm mb-2">Email</Label>
            <Input className="text-gray-400 text-sm" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="bio" className="font-serif text-sm mb-2">Bio</Label>
            <Input className="text-gray-400 text-sm" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>

         

          <Button className="w-full font-serif font-bold p-5 bg-blue-500 " onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}

