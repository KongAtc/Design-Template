import type * as React from "react";
import { StackScreenFrame } from "../StackScreenFrame/StackScreenFrame.js";
import type { StackThemeName } from "../stackTheme.js";

export type StackTeamLunchScreen =
  | "browse"
  | "menu"
  | "item"
  | "cart"
  | "tracking"
  | "orders"
  | "profile";

export interface StackTeamLunchTemplateProps {
  /** Active screen represented by the template surface. */
  screen?: StackTeamLunchScreen;
  /** Named palette from the Stack design template. */
  themeName?: StackThemeName;
  /** Optional concrete implementation for the selected screen. */
  children?: React.ReactNode;
}

export function StackTeamLunchTemplate({
  screen = "browse",
  themeName = "sage",
  children
}: StackTeamLunchTemplateProps) {
  return (
    <StackScreenFrame themeName={themeName} data-screen={screen}>
      {children}
    </StackScreenFrame>
  );
}
