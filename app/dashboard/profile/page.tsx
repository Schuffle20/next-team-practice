import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";



export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-10">
      <Card className="w-full max-w-xl rounded-2xl shadow-md  ">
        <CardHeader className="flex flex-col items-center gap-3">
          
          <CardTitle className="text-xl font-serif">My Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="mg mg" />
            </div>

            <div className="space-y-2 mb-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </div>
          </div>

          <div className="space-y-2 mb-3">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" placeholder="Short description about yourself" />
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

