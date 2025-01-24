"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setEmail('');
  };

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Platform</h3>
            <p className="text-sm text-muted-foreground">
              Premium content platform featuring expert insights, guides, and case studies from industry leaders.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/category/ideas" className="text-sm hover:text-primary">Ideas</Link>
              <Link href="/category/guides" className="text-sm hover:text-primary">Guides</Link>
              <Link href="/category/reviews" className="text-sm hover:text-primary">Reviews</Link>
              <Link href="/category/case-studies" className="text-sm hover:text-primary">Case Studies</Link>
              <Link href="/category/resources" className="text-sm hover:text-primary">Resources</Link>
              <Link href="/category/tools" className="text-sm hover:text-primary">Tools</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm hover:text-primary">About Us</Link>
              <Link href="/contact" className="text-sm hover:text-primary">Contact</Link>
              <Link href="/privacy" className="text-sm hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="text-sm hover:text-primary">Terms of Service</Link>
              <Link href="/contributors" className="text-sm hover:text-primary">Become a Contributor</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and exclusive content.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}