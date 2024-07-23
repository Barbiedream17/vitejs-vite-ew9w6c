import React from 'react';
import { compareDesc } from "date-fns";
import { BlogPosts } from "@/components/content/blog-posts";
import { allPosts } from "@/lib/contentlayer"; // You might need to adjust this import

export function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return <BlogPosts posts={posts} />;
}