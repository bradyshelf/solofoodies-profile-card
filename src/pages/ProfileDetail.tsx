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
  const {
    id
  } = useParams();

  // Sample data - in a real app this would come from props or API
  const sampleFoodies: FoodieData[] = [{
    id: "1",
    name: "Cameron Williamson",
    title: "Foodie madrileño",
    instagramHandle: "@CameronWilliamson",
    rating: 5,
    score: 85,
    collaborations: 12,
    instagram: {
      followers: "13K",
      engagement: "2.15%"
    },
    tiktok: {
      followers: "8.5K",
      engagement: "3.2%"
    },
    youtube: {
      followers: "5.2K",
      engagement: "1.8%"
    }
  }, {
    id: "2",
    name: "Maria Garcia",
    title: "Chef & Food Blogger",
    instagramHandle: "@MariaGarcia",
    rating: 4,
    score: 72,
    collaborations: 8,
    instagram: {
      followers: "25K",
      engagement: "3.1%"
    },
    tiktok: {
      followers: "15K",
      engagement: "4.2%"
    },
    youtube: {
      followers: "12K",
      engagement: "2.5%"
    }
  }];
  const foodie = sampleFoodies.find(f => f.id === id) || sampleFoodies[0];

  // Sample collaboration data
  const sampleCollaborations = [{
    id: 1,
    restaurant: "La Tasqueria",
    date: "15 Nov 2023",
    type: "Reseña gastronómica",
    image: "/public/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png",
    description: "Colaboración para promocionar el nuevo menú de temporada"
  }, {
    id: 2,
    restaurant: "Bocado Burguer",
    date: "8 Oct 2023",
    type: "Stories + Post",
    image: "/public/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png",
    description: "Evento de lanzamiento de la nueva línea de hamburguesas gourmet"
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 lg:px-8 py-3">
        <div className="flex items-center max-w-4xl mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-gray-800">
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
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < foodie.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />)}
                      <span className="text-xs text-gray-500 ml-1">({foodie.rating})</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{foodie.title}</p>
                  </div>
                  
                  {/* Credibility Score */}
                  
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
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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
            <button className="flex items-center justify-center px-8 py-1 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              <span className="text-white text-sm font-medium">Colab</span>
            </button>
          </div>
        </div>
        </div>
      </div>


      {/* Collaborations Section */}
      

      {/* Pricing Section */}
      <div className="bg-white mt-4 px-4 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tarifas</h3>
          
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <span className="text-sm text-gray-700">Combo ig Reel + TikTok + Youtube Short</span>
              <span className="text-sm font-semibold text-gray-900">150€</span>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <span className="text-sm text-gray-700">Review en google maps</span>
              <span className="text-sm font-semibold text-gray-900">25€</span>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <span className="text-sm text-gray-700">Entregar todo el material de video y fotos crudo de la sesión del día</span>
              <span className="text-sm font-semibold text-gray-900">40€</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white mt-4 px-4 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Reseñas de restaurantes</h3>
        
          {foodie.id === "2" ? (
            // Empty state for foodies with no reviews
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gray-400" />
              </div>
              <h4 className="text-gray-900 font-semibold mb-2">Aún no hay reseñas</h4>
              <p className="text-sm text-gray-500 max-w-sm mx-auto">
                Este foodie aún no ha recibido reseñas
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600">TR</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">The Royal Kitchen</h4>
                      <span className="text-xs text-gray-500">Hace 2 semanas</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm text-gray-600">
                      Excelente colaboración. {foodie.name} creó contenido increíble que realmente capturó la esencia de nuestro restaurante. Muy profesional y creativo.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-green-600">MB</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">Maria's Bistro</h4>
                      <span className="text-xs text-gray-500">Hace 1 mes</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Muy buena experiencia trabajando con {foodie.name}. El contenido llegó a mucha audiencia interesada en comida callejera.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <p className="text-sm text-gray-500">
                  Las reseñas son visibles para todos los restaurantes
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>;
};
export default ProfileDetail;