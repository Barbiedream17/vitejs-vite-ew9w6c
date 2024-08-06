import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { Button, Popover, ActionIcon } from "@mantine/core";

import { cn } from "@/lib/utils";

type ProjectType = {
  title: string;
  slug: string;
  color: string;
};

const projects: ProjectType[] = [
  {
    title: "Project 1",
    slug: "project-number-one",
    color: "bg-red-500",
  },
  {
    title: "Project 2",
    slug: "project-number-two",
    color: "bg-blue-500",
  },
];
const selected: ProjectType = projects[1];

export default function ProjectSwitcher({
  large = false,
}: {
  large?: boolean;
}) {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <div>
      <Popover
        opened={openPopover}
        onClose={() => setOpenPopover(false)}
        position="bottom-start"
        withArrow
      >
        <Popover.Target>
          <Button
            className="h-8 px-2"
            variant={openPopover ? "light" : "subtle"}
            onClick={() => setOpenPopover(!openPopover)}
          >
            <div className="flex items-center space-x-3 pr-2">
              <div
                className={cn(
                  "size-3 shrink-0 rounded-full",
                  selected.color
                )}
              />
              <div className="flex items-center space-x-3">
                <span
                  className={cn(
                    "inline-block truncate text-sm font-medium xl:max-w-[120px]",
                    large ? "w-full" : "max-w-[80px]"
                  )}
                >
                  {selected.slug}
                </span>
              </div>
            </div>
            <ActionIcon variant="transparent">
              <ChevronsUpDown size={18} className="text-gray-500" />
            </ActionIcon>
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <ProjectList
            selected={selected}
            projects={projects}
            setOpenPopover={setOpenPopover}
          />
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

function ProjectList({
  selected,
  projects,
  setOpenPopover,
}: {
  selected: ProjectType;
  projects: ProjectType[];
  setOpenPopover: (open: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {projects.map(({ slug, color }) => (
        <Link
          key={slug}
          className={cn(
            "relative flex h-9 items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            "rounded"
          )}
          to="#"
          onClick={() => setOpenPopover(false)}
        >
          <div className={cn("size-3 shrink-0 rounded-full", color)} />
          <span
            className={`flex-1 truncate text-sm ${
              selected.slug === slug
                ? "font-medium text-gray-900"
                : "font-normal"
            }`}
          >
            {slug}
          </span>
          {selected.slug === slug && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-900">
              <Check size={18} />
            </span>
          )}
        </Link>
      ))}
      <Button
        variant="outline"
        className="relative flex h-9 items-center justify-center gap-2 p-2"
        onClick={() => {
          setOpenPopover(false);
        }}
      >
        <Plus size={18} className="absolute left-2.5 top-2" />
        <span className="flex-1 truncate text-center">New Project</span>
      </Button>
    </div>
  );
}