import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Check, List } from "lucide-react";
import { Drawer, Container, Title, Text, Group, Button } from "@mantine/core";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { BLOG_CATEGORIES } from "@/config/blog";
import { cn } from "@/lib/utils";

export function BlogHeaderLayout() {
  const [open, setOpen] = useState(false);
  const { slug } = useParams<{ slug?: string }>();
  const data = BLOG_CATEGORIES.find((category) => category.slug === slug);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
        <Container size="sm">
          <Title order={1} className="font-heading text-3xl md:text-4xl">
            {data?.title || "Blog"}
          </Title>
          <Text className="mt-3.5 text-base text-muted-foreground md:text-lg">
            {data?.description ||
              "Latest news and updates from Next SaaS Starter."}
          </Text>
        </Container>

        <nav className="mt-8 hidden w-full md:flex">
          <Group grow className="w-full border-b text-[15px] text-muted-foreground">
            <CategoryLink title="All" href="/blog" active={!slug} />
            {BLOG_CATEGORIES.map((category) => (
              <CategoryLink
                key={category.slug}
                title={category.title}
                href={`/blog/category/${category.slug}`}
                active={category.slug === slug}
              />
            ))}
            <CategoryLink title="Guides" href="/guides" active={false} />
          </Group>
        </nav>
      </MaxWidthWrapper>

      <Drawer
        opened={open}
        onClose={closeDrawer}
        position="bottom"
        size="100%"
        title="Categories"
      >
        <Group grow>
          <CategoryLink
            title="All"
            href="/blog"
            active={!slug}
            clickAction={closeDrawer}
            mobile
          />
          {BLOG_CATEGORIES.map((category) => (
            <CategoryLink
              key={category.slug}
              title={category.title}
              href={`/blog/category/${category.slug}`}
              active={category.slug === slug}
              clickAction={closeDrawer}
              mobile
            />
          ))}
          <CategoryLink
            title="Guides"
            href="/guides"
            active={false}
            mobile
          />
        </Group>
      </Drawer>

      <Button
        onClick={() => setOpen(true)}
        className="mb-8 flex w-full items-center border-y p-3 text-foreground/90 md:hidden"
        leftSection={<List size={18} />}
      >
        Categories
      </Button>
    </>
  );
}

const CategoryLink = ({
  title,
  href,
  active,
  mobile = false,
  clickAction,
}: {
  title: string;
  href: string;
  active: boolean;
  mobile?: boolean;
  clickAction?: () => void;
}) => {
  return (
    <Link to={href} onClick={clickAction}>
      {mobile ? (
        <Button
          variant="subtle"
          className="w-full justify-between"
          rightSection={active && <Check size={16} />}
        >
          {title}
        </Button>
      ) : (
        <Button
          variant="subtle"
          className={cn(
            "-mb-px border-b-2 border-transparent font-medium text-muted-foreground hover:text-foreground",
            {
              "border-purple-600 text-foreground dark:border-purple-400/80":
                active,
            },
          )}
        >
          {title}
        </Button>
      )}
    </Link>
  );
};