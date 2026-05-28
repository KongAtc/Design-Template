import type * as React from "react";
import { getStackTheme, mergeStyles, type StackThemeName } from "../stackTheme.js";

export type StackPrimaryButtonSize = "sm" | "md" | "lg";
export type StackPrimaryButtonTone = "primary" | "ink";

export interface StackPrimaryButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Visual size from the Stack mobile ordering design. */
  size?: StackPrimaryButtonSize;
  /** Color treatment for the button. */
  tone?: StackPrimaryButtonTone;
  /** Makes the button fill its container. */
  full?: boolean;
  /** Named palette from the Stack design template. */
  themeName?: StackThemeName;
  /** Optional leading visual, usually an icon. */
  leading?: React.ReactNode;
  /** Optional trailing visual, often a price or chevron. */
  trailing?: React.ReactNode;
}

const sizeStyles: Record<StackPrimaryButtonSize, { height: number; fontSize: number }> = {
  sm: { height: 40, fontSize: 14 },
  md: { height: 48, fontSize: 15 },
  lg: { height: 54, fontSize: 16 }
};

export function StackPrimaryButton({
  children,
  size = "lg",
  tone = "primary",
  full = false,
  themeName = "sage",
  leading,
  trailing,
  style,
  ...buttonProps
}: StackPrimaryButtonProps) {
  const theme = getStackTheme(themeName);
  const sizing = sizeStyles[size];
  const background = tone === "primary" ? theme.primary : theme.ink;
  const color = tone === "primary" ? theme.primaryInk : theme.bg;

  return (
    <button
      {...buttonProps}
      style={mergeStyles(
        {
          alignItems: "center",
          background,
          border: 0,
          borderRadius: 999,
          boxShadow: "0 1px 2px rgba(0,0,0,0.08), 0 6px 18px rgba(0,0,0,0.10)",
          color,
          cursor: "pointer",
          display: "inline-flex",
          fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
          fontSize: sizing.fontSize,
          fontWeight: 600,
          gap: 10,
          height: sizing.height,
          justifyContent: "center",
          letterSpacing: 0,
          padding: "0 22px",
          width: full ? "100%" : undefined
        },
        style
      )}
    >
      {leading}
      <span>{children}</span>
      {trailing}
    </button>
  );
}
