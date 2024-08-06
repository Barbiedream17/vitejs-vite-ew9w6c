import { useState, useEffect } from 'react';
import {BlogPosts} from '@/components/content/blog-posts';
import { getAllPosts } from '@/api/posts';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <BlogPosts posts={posts} />
    </div>
  );
}
