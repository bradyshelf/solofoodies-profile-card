import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Camera, Plus, X, Save, X as Cancel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import PreviewFoodieCard from "@/components/PreviewFoodieCard";
import { useToast } from "@/hooks/use-toast";

const ProfileEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Edit state management
  const [isEditing, setIsEditing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

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
    if (!isEditing) return;
    setSocialLinks([...socialLinks, { platform: "", handle: "", url: "" }]);
    setHasUnsavedChanges(true);
  };

  const removeSocialLink = (index: number) => {
    if (!isEditing) return;
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
    setHasUnsavedChanges(true);
  };

  const updateSocialLink = (index: number, field: string, value: string) => {
    if (!isEditing) return;
    const updated = [...socialLinks];
    updated[index] = { ...updated[index], [field]: value };
    setSocialLinks(updated);
    setHasUnsavedChanges(true);
  };

  const handleProfileChange = (field: string, value: string) => {
    if (!isEditing) return;
    setProfile({ ...profile, [field]: value });
    setHasUnsavedChanges(true);
  };

  const handleBioChange = (value: string) => {
    if (!isEditing) return;
    setBio(value);
    setHasUnsavedChanges(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    setIsEditing(false);
    setHasUnsavedChanges(false);
    toast({
      title: "Profile updated",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleCancel = () => {
    if (hasUnsavedChanges) {
      if (window.confirm("You have unsaved changes. Are you sure you want to cancel?")) {
        setIsEditing(false);
        setHasUnsavedChanges(false);
        // Reset form to original values if needed
      }
    } else {
      setIsEditing(false);
    }
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
          <div className="ml-auto flex gap-2">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={handleCancel}>
                  <Cancel className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Preview Section */}
        <div className="space-y-4">
          <div className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground w-fit">
            Live Preview
          </div>
          <div className="max-w-sm">
            <PreviewFoodieCard 
              name={profile.name}
              title={profile.title}
              instagramHandle={profile.instagramHandle}
              rating={profile.rating}
              score={profile.score}
              collaborations={profile.collaborations}
              instagram={profile.instagram}
              tiktok={profile.tiktok}
              youtube={profile.youtube}
              onEdit={handleEdit}
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
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title/Tagline</Label>
                  <Input
                    id="title"
                    value={profile.title}
                    onChange={(e) => handleProfileChange('title', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => handleBioChange(e.target.value)}
                  placeholder="Tell restaurants about yourself and your food interests..."
                  rows={3}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>


        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;