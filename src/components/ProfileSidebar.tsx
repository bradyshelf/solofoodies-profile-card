
import { LogOut } from 'lucide-react';

interface ProfileSidebarProps {
  onClose: () => void;
}

const ProfileSidebar = ({ onClose }: ProfileSidebarProps) => {

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Lisa Burger</h3>
            <p className="text-sm text-gray-500">@lisaburger</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-4">
        <p className="text-center text-gray-600 mt-8">
          Restaurant Profile Management
        </p>

        {/* Solofoodies Branding */}
        <div className="mt-8 mb-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">SF</span>
            </div>
            <span className="text-sm font-medium">Solofoodies</span>
          </div>
        </div>
      </div>

      {/* Footer - Close */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onClose}
          className="w-full flex items-center px-3 py-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="text-base">Cerrar</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
