import { Edit, Eye, Lock, Zap, Heart, TrendingUp } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Edit,
      title: 'Easy Writing',
      description: 'Intuitive editor that makes writing a breeze. Focus on your content, not formatting.',
      gradient: 'from-purple-600 to-purple-400',
    },
    {
      icon: Eye,
      title: 'Beautiful Previews',
      description: 'See your content exactly as your readers will. Real-time preview as you write.',
      gradient: 'from-pink-600 to-pink-400',
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Your posts are yours. Advanced security measures protect your content.',
      gradient: 'from-orange-600 to-orange-400',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Powered by TanStack Query for blazing fast performance and instant updates.',
      gradient: 'from-purple-600 to-pink-400',
    },
    {
      icon: Heart,
      title: 'Reader Engagement',
      description: 'Build your audience with powerful engagement tools and analytics.',
      gradient: 'from-pink-600 to-orange-400',
    },
    {
      icon: TrendingUp,
      title: 'Growth Tools',
      description: 'Track your progress and watch your readership grow over time.',
      gradient: 'from-orange-600 to-purple-400',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and share your content effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
