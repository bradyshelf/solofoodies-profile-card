import { Instagram, Youtube, User, Star, MessageCircle, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FoodieCardProps {
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

const FoodieCard = ({ name, title, instagramHandle, rating, score, collaborations, instagram, tiktok, youtube }: FoodieCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "stroke-green-500 text-green-500";
    if (score >= 50) return "stroke-yellow-500 text-yellow-500";
    return "stroke-red-500 text-red-500";
  };

  const getCircleProgress = (score: number) => {
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const progress = (score / 100) * circumference;
    return { circumference, progress };
  };

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
              <div className="flex items-center space-x-2">
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
                      strokeDasharray={getCircleProgress(score).circumference}
                      strokeDashoffset={getCircleProgress(score).circumference - getCircleProgress(score).progress}
                      className={getScoreColor(score)}
                    />
                  </svg>
                  <span className={`absolute text-xs font-bold ${getScoreColor(score).replace('stroke-', 'text-')}`}>
                    {score}
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white stroke-current fill-none ml-0.5" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
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
          <div className="flex flex-col items-center">
            <Instagram className="w-4 h-4 text-pink-500 mb-1" />
            <div className="text-xs font-bold text-gray-900">{instagram.followers}</div>
            <div className="text-xs text-gray-500">{instagram.engagement}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 mb-1 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <div className="text-xs font-bold text-gray-900">{tiktok.followers}</div>
            <div className="text-xs text-gray-500">{tiktok.engagement}</div>
          </div>
          <div className="flex flex-col items-center">
            <Youtube className="w-4 h-4 text-red-500 mb-1" />
            <div className="text-xs font-bold text-gray-900">{youtube.followers}</div>
            <div className="text-xs text-gray-500">{youtube.engagement}</div>
          </div>
          <div className="flex flex-col items-center">
            <Handshake className="w-4 h-4 text-gray-600 mb-1" />
            <div className="text-xs font-bold text-gray-900">{collaborations}</div>
            <div className="text-xs text-gray-500">Collabs</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodieCard;