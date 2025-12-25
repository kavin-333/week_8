import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { PostsList } from './components/PostsList';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Toaster } from './components/ui/sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Features />
            <Contact />
            <FAQ />
          </>
        );
      case 'features':
        return (
          <>
            <div className="h-16"></div>
            <Features />
            <Contact />
          </>
        );
      case 'login':
        return <LoginForm onNavigate={handleNavigate} />;
      case 'signup':
        return <SignupForm onNavigate={handleNavigate} />;
      case 'posts':
        return <PostsList onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <>
            <div className="h-16"></div>
            <Contact />
          </>
        );
      case 'faq':
        return (
          <>
            <div className="h-16"></div>
            <FAQ />
          </>
        );
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="min-h-screen bg-white">
          <Navbar onNavigate={handleNavigate} currentSection={currentSection} />
          <main>{renderSection()}</main>
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="text-xl font-bold">ArticleX</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    The modern platform for writers and storytellers worldwide.
                  </p>
                </div>
                <div>
                  <h4 className="mb-4">Product</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <button onClick={() => handleNavigate('features')} className="hover:text-white">
                        Features
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavigate('posts')} className="hover:text-white">
                        Posts
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4">Company</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <button onClick={() => handleNavigate('contact')} className="hover:text-white">
                        Contact
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavigate('faq')} className="hover:text-white">
                        FAQ
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <a href="#" className="hover:text-white">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} ArticleX. All rights reserved.</p>
              </div>
            </div>
          </footer>
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
