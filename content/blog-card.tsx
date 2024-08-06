import { Link } from "react-router-dom";
import { Card, Text, Group } from "@mantine/core";
import { cn, formatDate } from "@/lib/utils";
import BlurImage from "@/components/shared/blur-image";
import Author from "./author";

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

interface BlogCardProps {
  data: Post;
  horizontale?: boolean;
}

export function BlogCard({ data, horizontale = false }: BlogCardProps) {
  return (
    <Card
      className={cn(
        "group relative",
        horizontale
          ? "grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6"
          : "flex flex-col space-y-2",
      )}
    >
      {data.image && (
        <Card.Section>
          <BlurImage
            alt={data.title}
            blurDataURL={data.blurDataURL}
            className={cn(
              "size-full object-cover object-center",
              horizontale ? "lg:h-72" : null,
            )}
            width={800}
            height={400}
            src={data.image}
            sizes="(max-width: 768px) 750px, 600px"
          />
        </Card.Section>
      )}
      <Card.Section
        className={cn(
          "flex flex-1 flex-col",
          horizontale ? "justify-center" : "justify-between",
        )}
      >
        <div className="w-full">
          <Text fw={700} size="xl" className="my-1.5 line-clamp-2">
            {data.title}
          </Text>
          {data.description && (
            <Text c="dimmed" className="line-clamp-2">
              {data.description}
            </Text>
          )}
        </div>
        <Group justify="space-between" mt="md">
          <Group gap="xs">
            {data.authors.map((author) => (
              <Author username={author} key={data._id + author} imageOnly />
            ))}
          </Group>
          {data.date && (
            <Text size="sm" c="dimmed">
              {formatDate(data.date)}
            </Text>
          )}
        </Group>
      </Card.Section>
      <Link to={data.slug} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </Card>
  );
}