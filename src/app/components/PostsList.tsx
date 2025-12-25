import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, deletePost, type Post } from '../services/blogService';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import { Edit, Trash2, Plus, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { CreatePostDialog } from './CreatePostDialog';
import { EditPostDialog } from './EditPostDialog';

interface PostsListProps {
  onNavigate: (section: string) => void;
}

export const PostsList: React.FC<PostsListProps> = ({ onNavigate }) => {
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete post');
    },
  });

  const handleDelete = (postId: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      deleteMutation.mutate(postId);
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-24">
        <div className="text-center">
          <h2 className="text-3xl mb-4 text-gray-900">Please sign in to view posts</h2>
          <Button
            onClick={() => onNavigate('login')}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"
          >
            Sign In
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            All Posts
          </h1>
          <Button
            onClick={() => setIsCreateOpen(true)}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-600">
            Error loading posts. Please try again.
          </div>
        )}

        {posts && posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No posts yet. Be the first to create one!</p>
            <Button
              onClick={() => setIsCreateOpen(true)}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"
            >
              Create Your First Post
            </Button>
          </div>
        )}

        <div className="space-y-6">
          {posts?.map((post) => {
            const isOwner = post.userId === user?.id;
            return (
              <Card key={post.id} className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-500">
                        By {post.author} • {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    {isOwner && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingPost(post)}
                          className="border-purple-200 text-purple-600 hover:bg-purple-50"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(post.id)}
                          disabled={deleteMutation.isPending}
                          className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 line-clamp-3">{post.body}</p>
                </CardContent>
                <CardFooter>
                  {isOwner && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
                      Your Post
                    </span>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      <CreatePostDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} />
      {editingPost && (
        <EditPostDialog
          post={editingPost}
          open={!!editingPost}
          onOpenChange={(open) => !open && setEditingPost(null)}
        />
      )}
    </section>
  );
};
