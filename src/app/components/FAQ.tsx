import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: 'What is ArticleX?',
      answer: 'ArticleX is a modern blogging platform that allows writers to create, share, and manage their content. Built with cutting-edge technology including TanStack Query for optimal performance.',
    },
    {
      question: 'Is ArticleX free to use?',
      answer: 'Yes! ArticleX offers a free tier that includes all essential features for creating and managing your blog posts. Premium features are available for advanced users.',
    },
    {
      question: 'Can I edit my posts after publishing?',
      answer: 'Absolutely! You have full control over your content. You can edit or delete your posts at any time. Only you can modify your own posts - other users cannot edit your content.',
    },
    {
      question: 'How does TanStack Query improve the experience?',
      answer: 'TanStack Query provides automatic caching, background data synchronization, and smart refetching strategies. This means faster load times, better offline support, and a smoother overall experience.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security seriously. Your posts are stored securely, and user authentication ensures that only you can access and modify your content.',
    },
    {
      question: 'Can I see other users\' posts?',
      answer: 'Yes! Once you\'re logged in, you can browse all public posts from the community. However, you can only edit or delete your own posts.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply sign up for a free account, and you can start creating posts immediately. Our intuitive interface makes it easy to write and publish your first article in minutes.',
    },
    {
      question: 'What happens to my posts if I delete my account?',
      answer: 'When you delete your account, all your posts will be permanently removed from the platform. We recommend exporting any content you want to keep before deleting your account.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ArticleX
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-purple-100 rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-gray-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl">
          <h3 className="text-2xl mb-3 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please reach out to our friendly team.
          </p>
        </div>
      </div>
    </section>
  );
};
