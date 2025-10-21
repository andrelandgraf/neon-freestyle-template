"use client";

import { useUser } from "@stackframe/stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

interface ProfileMenuProps {
  initials: string;
  displayName: string;
  email: string | null;
  profileImageUrl: string | null;
}

export function ProfileMenu({
  initials,
  displayName,
  email,
  profileImageUrl,
}: ProfileMenuProps) {
  const user = useUser();

  const handleSignOut = async () => {
    await user?.signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none focus:ring-2 focus:ring-ring rounded-full">
        <Avatar className="size-10 cursor-pointer hover:opacity-80 transition-opacity">
          {profileImageUrl && (
            <AvatarImage src={profileImageUrl} alt={displayName} />
          )}
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            {email && (
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          <LogOut />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

