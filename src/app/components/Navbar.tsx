import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentSection }) => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              ArticleX
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentSection === 'home'
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('features')}
              className={`transition-colors ${
                currentSection === 'features'
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Features
            </button>
            {isAuthenticated && (
              <button
                onClick={() => onNavigate('posts')}
                className={`transition-colors ${
                  currentSection === 'posts'
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Posts
              </button>
            )}
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${
                currentSection === 'contact'
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className={`transition-colors ${
                currentSection === 'faq'
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              FAQ
            </button>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600 hidden sm:inline">
                  Welcome, {user?.name}
                </span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => onNavigate('login')}
                  variant="ghost"
                  className="text-purple-600 hover:bg-purple-50"
                >
                  Login
                </Button>
                <Button
                  onClick={() => onNavigate('signup')}
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
