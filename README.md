# ArticleX - Modern Blog Platform

A comprehensive blog application built with React, TypeScript, TanStack Query, and local storage for state management.

## 🚀 Features

### Authentication System
- **Sign Up**: Create a new account with email and password
- **Login**: Secure login system
- **User Sessions**: Persistent authentication using localStorage
- **Protected Routes**: Only authenticated users can create, edit, and delete posts

### Blog Management
- **Create Posts**: Write and publish blog articles
- **Edit Posts**: Update your own posts (you can only edit your own content)
- **Delete Posts**: Remove your posts with confirmation
- **View All Posts**: Browse posts from all users
- **User-Specific Content**: Each user can only modify their own posts

### Modern UI/UX
- **Landing Page**: Eye-catching hero section with gradient backgrounds
- **Features Section**: Showcase platform capabilities
- **Contact Form**: Get in touch with support
- **FAQ Section**: Common questions and answers
- **Responsive Design**: Works seamlessly on all devices
- **Animated Backgrounds**: Smooth blob animations on hero section

### Technical Features
- **TanStack Query**: Advanced data fetching with caching and automatic refetching
- **Real-time Updates**: Posts list updates automatically after mutations
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **TypeScript**: Full type safety throughout the application

## 🎨 Design

The application features a modern gradient design inspired by the ArticleX branding:
- **Primary Colors**: Purple (#9333EA), Pink (#EC4899), Orange (#F97316)
- **Gradient Accents**: Smooth transitions between brand colors
- **Clean UI**: Minimalist design with focus on content
- **Smooth Animations**: Blob animations and hover effects

## 🛠️ Technologies Used

- **React 18.3**: Modern React with hooks
- **TypeScript**: Type-safe development
- **TanStack Query**: Server state management
- **Tailwind CSS**: Utility-first styling
- **Local Storage**: Client-side data persistence
- **Sonner**: Toast notifications
- **Lucide React**: Beautiful icons

## 📖 Usage Guide

### Getting Started

1. **Visit the Application**: Open the app in your browser
2. **Sign Up**: Click "Sign Up" and create an account
3. **Login**: Use your credentials to sign in
4. **Create Posts**: Click "Create Post" to write your first article

### Managing Posts

- **Your Posts**: Posts you create will show a "Your Post" badge
- **Edit**: Click the edit icon on your posts to modify them
- **Delete**: Click the trash icon to delete your posts
- **View Others**: See posts from all users in the community

### Navigation

- **Home**: Landing page with hero and features
- **Features**: Detailed feature showcase
- **Posts**: View and manage all blog posts (requires login)
- **Contact**: Send messages to support
- **FAQ**: Frequently asked questions

## 🔐 Security Notes

- Passwords are stored in localStorage (for demo purposes only)
- In production, use a proper backend with secure authentication
- Each user can only edit/delete their own posts
- User sessions persist across page refreshes

## 💡 Key Concepts Demonstrated

### TanStack Query
- `useQuery` for fetching posts
- `useMutation` for creating, updating, and deleting posts
- Query invalidation for automatic UI updates
- Loading and error states management

### React Patterns
- Context API for authentication state
- Custom hooks for reusable logic
- Component composition
- Controlled forms

### TypeScript
- Interface definitions for type safety
- Type-safe props and state
- Generic types with TanStack Query

## 🎯 Learning Objectives Met

✅ Understand client state vs server state
✅ Implement TanStack Query for data fetching
✅ Handle loading, error, and success states
✅ Create, update, and delete data with mutations
✅ Implement query invalidation for automatic updates
✅ Build authentication system
✅ Manage user-specific content
✅ Create responsive, modern UI

## 🔄 Data Flow

1. **User Action**: Click create/edit/delete button
2. **Mutation**: TanStack Query mutation function executes
3. **API Call**: Service function performs operation
4. **Success**: Query invalidation triggers refetch
5. **UI Update**: Component re-renders with fresh data

## 📝 Notes

- This is a frontend-only application using localStorage
- Data persists in browser storage
- For production, integrate with a real backend API
- JSONPlaceholder API concepts are demonstrated via local storage

## 🚧 Future Enhancements

- User profiles and avatars
- Post categories and tags
- Search and filter functionality
- Rich text editor
- Image uploads
- Comments system
- Like/favorite posts
- User following system

---

Built with ❤️ using React and TanStack Query
