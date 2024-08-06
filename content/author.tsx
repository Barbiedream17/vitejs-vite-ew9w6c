import { Link } from "react-router-dom";
import { Avatar, Group, Text } from "@mantine/core";
import { BLOG_AUTHORS } from "@/config/blog";

interface AuthorProps {
  username: string;
  imageOnly?: boolean;
}

export default function Author({ username, imageOnly }: AuthorProps) {
  const authors = BLOG_AUTHORS;
  const author = authors[username as keyof typeof authors];

  if (!author) {
    return null; // Or handle the case when the author is not found
  }

  if (imageOnly) {
    return (
      <Avatar
        src={author.image}
        alt={author.name}
        size={32}
        radius="xl"
        className="transition-all group-hover:brightness-90"
      />
    );
  }

  return (
    <Link
      to={`https://twitter.com/${author.twitter}`}
      className="group flex w-max items-center space-x-2.5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Group>
        <Avatar
          src={author.image}
          alt={author.name}
          size={40}
          radius="xl"
          className="transition-all group-hover:brightness-90 md:size-10"
        />
        <div>
          <Text fw={600} size="sm">
            {author.name}
          </Text>
          <Text size="xs" c="dimmed">
            @{author.twitter}
          </Text>
        </div>
      </Group>
    </Link>
  );
}