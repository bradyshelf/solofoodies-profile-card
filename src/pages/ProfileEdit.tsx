import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Camera, Plus, X, Save, X as Cancel, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    category: "Lifestyle",
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
                <Label htmlFor="category">Content Category</Label>
                <Select
                  value={profile.category}
                  onValueChange={(value) => handleProfileChange('category', value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select content category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="Casual">Casual</SelectItem>
                    <SelectItem value="Travel">Travel</SelectItem>
                    <SelectItem value="Luxury/Fine Dining">Luxury/Fine Dining</SelectItem>
                    <SelectItem value="Fitness/Wellness">Fitness/Wellness</SelectItem>
                    <SelectItem value="Critic/Review">Critic/Review</SelectItem>
                  </SelectContent>
                </Select>
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

          {/* Collaborations Section */}
          <Card>
            <CardHeader>
              <CardTitle>Colaboraciones realizadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  No has colaborado aún con ningún restaurante
                </p>
                <Button variant="link" className="text-blue-500">
                  + Buscar colaboraciones
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reviews Section */}
          <Card>
            <CardHeader>
              <CardTitle>Reseñas de restaurantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold">TR</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold">The Royal Kitchen</h4>
                        <span className="text-xs text-muted-foreground">Hace 2 semanas</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-yellow-500">★</span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Excelente colaboración. Sofia creó contenido increíble que realmente capturó la esencia de nuestro restaurante. Muy profesional y creativa.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold">MB</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold">Maria's Bistro</h4>
                        <span className="text-xs text-muted-foreground">Hace 1 mes</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4].map((star) => (
                          <span key={star} className="text-yellow-500">★</span>
                        ))}
                        <span className="text-yellow-500/30">★</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Muy buena experiencia trabajando con Sofia. El contenido llegó a mucha audiencia interesada en comida callejera.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <p className="text-sm text-muted-foreground">
                    Las reseñas son visibles para todos los restaurantes
                  </p>
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