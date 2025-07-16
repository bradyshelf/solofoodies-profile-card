import { ArrowLeft, Star, Heart, Instagram, Youtube, MessageCircle, Handshake } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface FoodieData {
  id: string;
  name: string;
  title: string;
  instagramHandle: string;
  rating: number;
  score: number;
  collaborations: number;
  instagram: {
    followers: string;
    engagement: string;
  };
  tiktok: {
    followers: string;
    engagement: string;
  };
  youtube: {
    followers: string;
    engagement: string;
  };
}

const ProfileDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Sample data - in a real app this would come from props or API
  const sampleFoodies: FoodieData[] = [
    {
      id: "1",
      name: "Cameron Williamson",
      title: "Foodie madrileño",
      instagramHandle: "@CameronWilliamson",
      rating: 5,
      score: 85,
      collaborations: 12,
      instagram: { followers: "13K", engagement: "2.15%" },
      tiktok: { followers: "8.5K", engagement: "3.2%" },
      youtube: { followers: "5.2K", engagement: "1.8%" }
    },
    {
      id: "2", 
      name: "Maria Garcia",
      title: "Chef & Food Blogger",
      instagramHandle: "@MariaGarcia",
      rating: 4,
      score: 72,
      collaborations: 8,
      instagram: { followers: "25K", engagement: "3.1%" },
      tiktok: { followers: "15K", engagement: "4.2%" },
      youtube: { followers: "12K", engagement: "2.5%" }
    }
  ];

  const foodie = sampleFoodies.find(f => f.id === id) || sampleFoodies[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 lg:px-8 py-3">
        <div className="flex items-center max-w-4xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">ATRÁS</span>
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white px-4 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            {/* Profile Image */}
            <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-600">
                {foodie.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{foodie.instagramHandle}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < foodie.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({foodie.rating})</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{foodie.title}</p>
                  </div>
                  
                  {/* Credibility Score */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                      {/* Background circle */}
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 16}
                        strokeDashoffset={2 * Math.PI * 16 - (foodie.score / 100) * 2 * Math.PI * 16}
                        className={`${
                          foodie.score >= 70 ? 'stroke-green-500' : 
                          foodie.score >= 50 ? 'stroke-yellow-500' : 'stroke-red-500'
                        }`}
                      />
                    </svg>
                    <span className={`absolute text-xs font-bold ${
                      foodie.score >= 70 ? 'text-green-500' : 
                      foodie.score >= 50 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {foodie.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Heart Icon */}
          <button className="p-2">
            <Heart className="w-6 h-6 text-red-500" />
          </button>
        </div>

        {/* Social Media Stats Section */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
          <div className="flex flex-col items-center">
            <Instagram className="w-4 h-4 text-pink-500 mb-1" />
            <div className="text-xs font-bold text-gray-900">{foodie.instagram.followers}</div>
            <div className="text-xs text-gray-500">{foodie.instagram.engagement}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 mb-1 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <div className="text-xs font-bold text-gray-900">{foodie.tiktok.followers}</div>
            <div className="text-xs text-gray-500">{foodie.tiktok.engagement}</div>
          </div>
          <div className="flex flex-col items-center">
            <Youtube className="w-4 h-4 text-red-500 mb-1" />
            <div className="text-xs font-bold text-gray-900">{foodie.youtube.followers}</div>
            <div className="text-xs text-gray-500">{foodie.youtube.engagement}</div>
          </div>
          <div className="flex flex-col items-center">
            <Handshake className="w-4 h-4 text-gray-600 mb-1" />
            <div className="text-xs font-bold text-gray-900">{foodie.collaborations}</div>
            <div className="text-xs text-gray-500">Collabs</div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 flex justify-between items-start">
          <div>
            <p className="text-gray-700">📍 {foodie.title}</p>
            <p className="text-gray-600 text-sm mt-1">Buscando los mejores restaurantes de Madrid</p>
          </div>
          
          {/* Chat and Message Buttons */}
          <div className="flex space-x-3">
            <button className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
              <MessageCircle className="w-6 h-6 text-white" />
            </button>
            <button className="flex items-center justify-center px-3 py-1 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              <span className="text-white text-xs font-medium">Colab</span>
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* Collaborations Section */}
      <div className="bg-white mt-4 px-4 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Colaboraciones realizadas</h2>
          
          <div className="text-center py-8">
            <p className="text-gray-500 mb-2">No has colaborado aún con</p>
            <p className="text-gray-500 mb-4">este foodie</p>
            <button className="text-blue-500 font-medium">+ Colaborar juntos</button>
          </div>
        </div>
      </div>

      {/* Social Media Stats */}
      <div className="bg-white mt-4 px-4 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Estadísticas de redes</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Instagram className="w-5 h-5 text-pink-500" />
              <span className="font-medium">Instagram</span>
            </div>
            <div className="text-right">
              <div className="font-bold">{foodie.instagram.followers}</div>
              <div className="text-sm text-gray-500">{foodie.instagram.engagement}</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <span className="font-medium">TikTok</span>
            </div>
            <div className="text-right">
              <div className="font-bold">{foodie.tiktok.followers}</div>
              <div className="text-sm text-gray-500">{foodie.tiktok.engagement}</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Youtube className="w-5 h-5 text-red-500" />
              <span className="font-medium">YouTube</span>
            </div>
            <div className="text-right">
              <div className="font-bold">{foodie.youtube.followers}</div>
              <div className="text-sm text-gray-500">{foodie.youtube.engagement}</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;