import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Camera, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import FoodieCard from "@/components/FoodieCard";

const ProfileEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample data for the profile being edited
  const [profile, setProfile] = useState({
    id: "3",
    name: "Sofia Chen",
    title: "Street Food Explorer",
    instagramHandle: "@sofiaeats",
    rating: 3,
    score: 35,
    collaborations: 2,
    instagram: {
      followers: "45K",
      engagement: "3.8%"
    },
    tiktok: {
      followers: "92K",
      engagement: "5.1%"
    },
    youtube: {
      followers: "18K",
      engagement: "2.2%"
    }
  });

  const [bio, setBio] = useState("Passionate about discovering hidden gems in street food culture. Always on the hunt for authentic flavors and unique dining experiences.");
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Instagram", handle: "@sofiaeats", url: "https://instagram.com/sofiaeats" },
    { platform: "TikTok", handle: "@sofiaeats", url: "https://tiktok.com/@sofiaeats" },
    { platform: "YouTube", handle: "Sofia Eats", url: "https://youtube.com/@sofiaeats" }
  ]);

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "", handle: "", url: "" }]);
  };

  const removeSocialLink = (index: number) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  const updateSocialLink = (index: number, field: string, value: string) => {
    const updated = [...socialLinks];
    updated[index] = { ...updated[index], [field]: value };
    setSocialLinks(updated);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-accent"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <div className="ml-auto">
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Preview Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">How restaurants see your profile</h2>
            <div className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground">
              Live Preview
            </div>
          </div>
          <div className="max-w-sm">
            <FoodieCard 
              name={profile.name}
              title={profile.title}
              instagramHandle={profile.instagramHandle}
              rating={profile.rating}
              score={profile.score}
              collaborations={profile.collaborations}
              instagram={profile.instagram}
              tiktok={profile.tiktok}
              youtube={profile.youtube}
            />
          </div>
        </div>

        {/* Edit Form */}
        <div className="grid gap-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title/Tagline</Label>
                  <Input
                    id="title"
                    value={profile.title}
                    onChange={(e) => setProfile({...profile, title: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell restaurants about yourself and your food interests..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Social Media Accounts
                <Button onClick={addSocialLink} size="sm" variant="outline">
                  <Plus className="w-4 h-4" />
                  Add Platform
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3 border rounded-lg">
                  <div className="space-y-2">
                    <Label>Platform</Label>
                    <Input
                      value={social.platform}
                      onChange={(e) => updateSocialLink(index, "platform", e.target.value)}
                      placeholder="Instagram, TikTok, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Handle</Label>
                    <Input
                      value={social.handle}
                      onChange={(e) => updateSocialLink(index, "handle", e.target.value)}
                      placeholder="@username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>URL</Label>
                    <Input
                      value={social.url}
                      onChange={(e) => updateSocialLink(index, "url", e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSocialLink(index)}
                      className="text-destructive hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Profile Visibility</Label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option>Public - Visible to all restaurants</option>
                    <option>Private - Only visible to connected restaurants</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Collaboration Status</Label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option>Open to collaborations</option>
                    <option>Selective collaborations</option>
                    <option>Not accepting collaborations</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;