import { Button } from './ui/button';
import { Sparkles, BookOpen, Users } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-purple-100">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm text-purple-600">Welcome to ArticleX</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          Share Your Stories
          <br />
          With The World
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          ArticleX is the modern platform for writers, bloggers, and storytellers. 
          Create, share, and discover amazing content with our community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={() => onNavigate('signup')}
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90 text-lg px-8"
          >
            Get Started Free
          </Button>
          <Button
            onClick={() => onNavigate('features')}
            size="lg"
            variant="outline"
            className="border-purple-200 text-purple-600 hover:bg-purple-50 text-lg px-8"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2 text-gray-900">Rich Editor</h3>
            <p className="text-sm text-gray-600">
              Create beautiful posts with our intuitive writing interface
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-100">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2 text-gray-900">Community</h3>
            <p className="text-sm text-gray-600">
              Connect with writers and readers from around the globe
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-100">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2 text-gray-900">Discover</h3>
            <p className="text-sm text-gray-600">
              Explore trending topics and featured writers daily
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
