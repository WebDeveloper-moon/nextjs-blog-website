export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'contributor' | 'subscriber';
  isInvited: boolean;
  createdAt: Date;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  categoryId: string;
  authorId: string;
  isPremium: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type Newsletter = {
  id: string;
  email: string;
  name: string;
  subscribedAt: Date;
  status: 'active' | 'unsubscribed';
};

export type Subscription = {
  id: string;
  userId: string;
  plan: 'monthly' | 'yearly';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
};