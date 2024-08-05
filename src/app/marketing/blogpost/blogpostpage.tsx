import React from "react";
import { useParams } from "react-router-dom";
import { Container, Text, Title, Group, Button, Stack, Grid } from "@mantine/core";
import { Link } from "react-router-dom";

import { Mdx } from "@/components/content/mdx-components";
import "@/styles/mdx.css";

import { BLOG_CATEGORIES } from "@/config/blog";
import { getTableOfContents } from "@/lib/toc";
import { cn, formatDate, getBlurDataURL, placeholderBlurhash } from "@/lib/utils";
import Author from "@/components/content/author";
import BlurImage from "@/components/shared/blur-image";
import { DashboardTableOfContents } from "@/components/shared/toc";

// Assuming you have a way to fetch posts, perhaps from an API
import { fetchPost, fetchRelatedPosts } from "@/api/posts";

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = React.useState<any>(null);
  const [relatedArticles, setRelatedArticles] = React.useState<any[]>([]);
  const [toc, setToc] = React.useState<any>(null);
  const [thumbnailBlurhash, setThumbnailBlurhash] = React.useState<string | null>(null);
  const [images, setImages] = React.useState<any[]>([]);

  React.useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const postData = await fetchPost(slug);
        setPost(postData);
        
        const category = BLOG_CATEGORIES.find(
          (category) => category.slug === postData.categories[0]
        )!;

        const relatedData = await fetchRelatedPosts(postData.related);
        setRelatedArticles(relatedData);

        const tocData = await getTableOfContents(postData.body.raw);
        setToc(tocData);

        const [thumbnailBlur, imagesData] = await Promise.all([
          getBlurDataURL(postData.image),
          Promise.all(
            postData.images.map(async (src: string) => ({
              src,
              blurDataURL: await getBlurDataURL(src),
            }))
          ),
        ]);

        setThumbnailBlurhash(thumbnailBlur);
        setImages(imagesData);
      }
    };

    loadPost();
  }, [slug]);

  if (!post) return null;

  return (
    <>
      <Container size="lg" className="pt-6 md:pt-10">
        <Stack spacing="md">
          <Group>
            <Button
              component={Link}
              to={`/blog/category/${post.categories[0]}`}
              variant="outline"
              size="sm"
              radius="lg"
            >
              {BLOG_CATEGORIES.find(cat => cat.slug === post.categories[0])?.title}
            </Button>
            <Text size="sm" color="dimmed">
              {formatDate(post.date)}
            </Text>
          </Group>
          <Title order={1} className="font-heading text-3xl text-foreground sm:text-4xl">
            {post.title}
          </Title>
          <Text size="lg" color="dimmed">
            {post.description}
          </Text>
          <Group spacing="xl">
            {post.authors.map((author: string) => (
              <Author username={author} key={post._id + author} />
            ))}
          </Group>
        </Stack>
      </Container>

      <div className="relative">
        <div className="absolute top-52 w-full border-t" />

        <Container size="lg" className="pt-8">
          <Grid>
            <Grid.Col span={12} md={9}>
              <Stack className="relative mb-10 space-y-8 border-y bg-background md:rounded-xl md:border">
                <BlurImage
                  alt={post.title}
                  blurDataURL={thumbnailBlurhash ?? placeholderBlurhash}
                  className="aspect-[1200/630] border-b object-cover md:rounded-t-xl"
                  width={1200}
                  height={630}
                  src={post.image}
                />
                <div className="px-[.8rem] pb-10 md:px-8">
                  <Mdx code={post.body.code} images={images} />
                </div>
              </Stack>
            </Grid.Col>
            <Grid.Col span={3} className="hidden lg:block">
              <div className="sticky top-20 mt-52 flex-col divide-y divide-muted self-start pb-24">
                <DashboardTableOfContents toc={toc} />
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {relatedArticles.length > 0 && (
        <Container size="lg" className="pb-16">
          <Stack spacing="md">
            <Title order={2} className="font-heading text-2xl text-foreground">
              More Articles
            </Title>
            <Grid>
              {relatedArticles.map((relatedPost) => (
                <Grid.Col key={relatedPost.slug} span={12} md={6}>
                  <Link
                    to={relatedPost.slug}
                    className="flex flex-col space-y-2 rounded-xl border p-5 transition-colors duration-300 hover:bg-muted/80"
                  >
                    <Title order={3} className="font-heading text-xl text-foreground">
                      {relatedPost.title}
                    </Title>
                    <Text lineClamp={2} size="sm" color="dimmed">
                      {relatedPost.description}
                    </Text>
                    <Text size="xs" color="dimmed">
                      {formatDate(relatedPost.date)}
                    </Text>
                  </Link>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default PostPage;