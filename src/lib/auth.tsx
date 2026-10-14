import React from "react";
import {
  ClerkProvider as BaseClerkProvider,
  SignedIn as BaseSignedIn,
  SignedOut as BaseSignedOut,
  SignInButton as BaseSignInButton,
  UserButton as BaseUserButton,
} from "@clerk/clerk-react";

const envPublishableKey =
  (typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_CLERK_PUBLISHABLE_KEY) ||
  "";

const hasKey = Boolean(envPublishableKey);

export function ClerkProvider({
  children,
  publishableKey,
  ...props
}: {
  children: React.ReactNode;
  publishableKey?: string;
  [key: string]: any;
}) {
  const activeKey = publishableKey || envPublishableKey;

  if (!activeKey) {
    // If no Clerk Publishable Key is provided yet, render children so the UI works immediately
    return <>{children}</>;
  }

  return (
    <BaseClerkProvider publishableKey={activeKey} {...props}>
      {children}
    </BaseClerkProvider>
  );
}

export function SignedIn({ children }: { children: React.ReactNode }) {
  if (!hasKey) return null;
  return <BaseSignedIn>{children}</BaseSignedIn>;
}

export function SignedOut({ children }: { children: React.ReactNode }) {
  if (!hasKey) return <>{children}</>;
  return <BaseSignedOut>{children}</BaseSignedOut>;
}

export function SignInButton({
  children,
  mode,
}: {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
}) {
  if (!hasKey) {
    return (
      <span
        onClick={() => {
          alert(
            "Authentication: To enable full Clerk sign-in, add VITE_CLERK_PUBLISHABLE_KEY to your .env file."
          );
        }}
      >
        {children}
      </span>
    );
  }
  return <BaseSignInButton mode={mode}>{children}</BaseSignInButton>;
}

const FallbackUserButton: any = () => null;
FallbackUserButton.MenuItems = ({ children }: any) => <>{children}</>;
FallbackUserButton.Link = () => null;
FallbackUserButton.Action = () => null;
FallbackUserButton.UserProfilePage = () => null;

export const UserButton: any = hasKey ? BaseUserButton : FallbackUserButton;
