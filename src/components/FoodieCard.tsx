import { Instagram, Youtube, User, Star, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FoodieCardProps {
  name: string;
  title: string;
  instagramHandle: string;
  rating: number;
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

const FoodieCard = ({ name, title, instagramHandle, rating, instagram, tiktok, youtube }: FoodieCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <CardContent className="p-4">
        {/* Main horizontal section */}
        <div className="flex items-start">
          {/* Profile Icon */}
          <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
            <User className="w-8 h-8 text-gray-500" />
          </div>
          
          {/* Name and Info Section */}
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{instagramHandle}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({rating})</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">{title}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                  Colab
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Stats Section */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{instagram.followers}</div>
            <div className="text-xs text-gray-500">Instagram</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{instagram.engagement}</div>
            <div className="text-xs text-gray-500">Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{tiktok.followers}</div>
            <div className="text-xs text-gray-500">TikTok</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{youtube.followers}</div>
            <div className="text-xs text-gray-500">YouTube</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodieCard;