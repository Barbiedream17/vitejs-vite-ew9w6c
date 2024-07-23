import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  LayoutDashboard,
  Lock,
  LogOut,
  Settings,
} from "lucide-react";
import { Drawer } from "vaul";

import { User } from "@/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/shared/user-avatar";

export function UserAccountNav({ user, signOut }: { user: User; signOut: () => void }) {
  const [open, setOpen] = useState(false);
  const closeDrawer = () => {
    setOpen(false);
  };

  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={open} onClose={closeDrawer}>
        <Drawer.Trigger onClick={() => setOpen(true)}>
          <UserAvatar
            user={{ name: user.name || null, image: user.image || null }}
            className="size-9 border"
          />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay
            className="fixed inset-0 z-40 h-full bg-background/80 backdrop-blur-sm"
            onClick={closeDrawer}
          />
          <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 mt-24 overflow-hidden rounded-t-[10px] border bg-background px-3 text-sm">
            {/* Drawer content */}
            {/* ... (keep the existing drawer content, replacing Next.js Link with React Router Link) */}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className="size-9 border"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* DropdownMenu content */}
        {/* ... (keep the existing dropdown content, replacing Next.js Link with React Router Link) */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}