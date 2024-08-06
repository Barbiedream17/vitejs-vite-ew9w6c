import { Grid } from "@mantine/core";
import { BlogCard } from "@/components/content/blog-card";

interface Post {
  _id: string;
  title: string;
  description?: string;
  date?: string;
  image?: string;
  authors: string[];
  slug: string;
  blurDataURL: string;
}

interface BlogPostsProps {
  posts: Post[];
}

export function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <main className="space-y-8">
      <BlogCard data={posts[0]} horizontale />

      <Grid>
        {posts.slice(1).map((post) => (
          <Grid.Col key={post._id} span={{ base: 12, md: 6, lg: 4 }}>
            <BlogCard data={post} />
          </Grid.Col>
        ))}
      </Grid>
    </main>
  );
}