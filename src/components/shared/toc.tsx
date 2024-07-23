import * as React from "react";
import { useMounted } from "@/hooks/use-mounted"; // Custom hook to determine if component is mounted
import { TableOfContents } from "@/lib/toc"; // Type for Table of Contents
import { cn } from "@/lib/utils"; // Utility function for class names

interface TocProps {
  toc: TableOfContents; // Props type for Table of Contents
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  );

  const activeHeading = useActiveItem(itemIds); // Get the active heading
  const mounted = useMounted(); // Check if component is mounted

  if (!toc?.items) {
    return null; // Return null if there are no items
  }

  return mounted ? (
    <div className="space-y-2">
      <p className="text-[15px] font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} /> {/* Render the tree */}
    </div>
  ) : null;
}

// Custom hook to track the active item based on intersection
function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      if (!id) return;

      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) return;

        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [itemIds]);

  return activeId; // Return the active ID
}

interface TreeProps {
  tree: TableOfContents; // Props type for Tree
  level?: number; // Current nesting level
  activeItem?: string | null; // Currently active item
}

// Recursive component to render the tree structure
function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => (
        <li key={index} className={cn("mt-0 pt-1")}>
          <a
            href={item.url}
            className={cn(
              "inline-block text-sm no-underline",
              item.url === `#${activeItem}` ? "font-medium text-primary" : "text-muted-foreground"
            )}
          >
            {item.title} {/* Display the title */}
          </a>
          {item.items?.length ? (
            <Tree tree={item} level={level + 1} activeItem={activeItem} />
          ) : null}
        </li>
      ))}
    </ul>
  ) : null;
}