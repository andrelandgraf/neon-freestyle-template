import "server-only";

import { ServerUser, StackServerApp } from "@stackframe/stack";
import { stackClientApp } from "./client";

export function toClientUser(user: ServerUser | null) {
  if (!user) return null;
  const displayName = user.displayName || emailToDisplayName(user.primaryEmail) ||  "Anonymous User";
  const initials = getInitials(displayName);
  return {
    id: user.id,
    email: user.primaryEmail,
    displayName,
    initials,
    profileImageUrl: user.profileImageUrl,
  };
}

function emailToDisplayName(email: string | null) {
  return email ? email.split("@")[0] : null;
}

function getInitials(displayName: string) {
  return displayName.split(" ").map(name => name[0]).join("");
}

export const stackServerApp = new StackServerApp({
  inheritsFrom: stackClientApp,
});
