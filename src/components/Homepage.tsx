
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ProfileSidebar from './ProfileSidebar';
import FoodieCard from './FoodieCard';

const Homepage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sampleFoodies = [
    {
      id: "1",
      name: "Chef Maria Rodriguez",
      title: "Food Enthusiast",
      instagramHandle: "@chefmariarod",
      rating: 5,
      score: 73,
      collaborations: 14,
      instagram: {
        followers: "125K",
        engagement: "4.2%"
      },
      tiktok: {
        followers: "89K",
        engagement: "6.8%"
      },
      youtube: {
        followers: "45K",
        engagement: "3.1%"
      }
    },
    {
      id: "2",
      name: "Alex Thompson",
      title: "Culinary Explorer",
      instagramHandle: "@alexeats",
      rating: 4,
      score: 25,
      collaborations: 3,
      instagram: {
        followers: "78K",
        engagement: "5.3%"
      },
      tiktok: {
        followers: "156K",
        engagement: "8.2%"
      },
      youtube: {
        followers: "32K",
        engagement: "2.9%"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-2xl mb-4">
            <Utensils className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Solo Foodies</h1>
          <p className="text-gray-600">Foodie Profiles</p>
        </div>

        {/* Foodie Cards Section */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">
            Featured Foodies
          </h2>
          {sampleFoodies.map((foodie, index) => (
            <div
              key={index}
              onClick={() => navigate(`/profile/${foodie.id}`)}
              className="cursor-pointer hover:scale-[1.02] transition-transform duration-200"
            >
              <FoodieCard
                name={foodie.name}
                title={foodie.title}
                instagramHandle={foodie.instagramHandle}
                rating={foodie.rating}
                score={foodie.score}
                collaborations={foodie.collaborations}
                instagram={foodie.instagram}
                tiktok={foodie.tiktok}
                youtube={foodie.youtube}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>Restaurant Profile Management System</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
