export interface Post {
  id: number;
  title: string;
  body: string;
  userId: string;
  author: string;
  createdAt: string;
}

const POSTS_KEY = 'articlex_posts';

// Initialize with some demo posts if none exist
const initializePosts = () => {
  const existing = localStorage.getItem(POSTS_KEY);
  if (!existing) {
    const demoPosts: Post[] = [
      {
        id: 1,
        title: 'Welcome to ArticleX',
        body: 'ArticleX is your premier platform for sharing thoughts, stories, and ideas. Whether you\'re a seasoned writer or just starting out, ArticleX provides the perfect space to express yourself and connect with readers worldwide.',
        userId: 'demo',
        author: 'ArticleX Team',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'The Power of TanStack Query',
        body: 'TanStack Query revolutionizes data fetching in React applications. With features like automatic caching, background updates, and smart refetching strategies, it simplifies server state management and improves user experience dramatically.',
        userId: 'demo',
        author: 'ArticleX Team',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
    ];
    localStorage.setItem(POSTS_KEY, JSON.stringify(demoPosts));
  }
};

initializePosts();

// Get all posts
export const fetchPosts = async (): Promise<Post[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const posts = localStorage.getItem(POSTS_KEY);
  return posts ? JSON.parse(posts) : [];
};

// Get single post
export const fetchPost = async (id: number): Promise<Post | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  const posts = localStorage.getItem(POSTS_KEY);
  if (!posts) return null;
  
  const allPosts: Post[] = JSON.parse(posts);
  return allPosts.find((p) => p.id === id) || null;
};

// Create post
export const createPost = async (
  post: Omit<Post, 'id' | 'createdAt'>
): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const posts = localStorage.getItem(POSTS_KEY);
  const allPosts: Post[] = posts ? JSON.parse(posts) : [];
  
  const newPost: Post = {
    ...post,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };
  
  allPosts.unshift(newPost);
  localStorage.setItem(POSTS_KEY, JSON.stringify(allPosts));
  
  return newPost;
};

// Update post
export const updatePost = async (
  id: number,
  updates: Partial<Omit<Post, 'id' | 'userId' | 'createdAt'>>
): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const posts = localStorage.getItem(POSTS_KEY);
  if (!posts) throw new Error('No posts found');
  
  const allPosts: Post[] = JSON.parse(posts);
  const index = allPosts.findIndex((p) => p.id === id);
  
  if (index === -1) throw new Error('Post not found');
  
  allPosts[index] = { ...allPosts[index], ...updates };
  localStorage.setItem(POSTS_KEY, JSON.stringify(allPosts));
  
  return allPosts[index];
};

// Delete post
export const deletePost = async (id: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const posts = localStorage.getItem(POSTS_KEY);
  if (!posts) throw new Error('No posts found');
  
  const allPosts: Post[] = JSON.parse(posts);
  const filtered = allPosts.filter((p) => p.id !== id);
  
  localStorage.setItem(POSTS_KEY, JSON.stringify(filtered));
};
