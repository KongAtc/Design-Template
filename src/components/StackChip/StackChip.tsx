import type * as React from "react";
import { getStackTheme, mergeStyles, type StackThemeName } from "../stackTheme.js";

export interface StackChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Chip label shown to users. */
  label: string;
  /** Active chips use the ink color and inverted text. */
  active?: boolean;
  /** Named palette from the Stack design template. */
  themeName?: StackThemeName;
}

export function StackChip({
  label,
  active = false,
  themeName = "sage",
  style,
  ...buttonProps
}: StackChipProps) {
  const theme = getStackTheme(themeName);

  return (
    <button
      {...buttonProps}
      style={mergeStyles(
        {
          background: active ? theme.ink : theme.chip,
          border: 0,
          borderRadius: 999,
          color: active ? theme.bg : theme.ink2,
          cursor: "pointer",
          flexShrink: 0,
          fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
          fontSize: 13,
          fontWeight: 500,
          height: 34,
          letterSpacing: 0,
          padding: "0 14px",
          whiteSpace: "nowrap"
        },
        style
      )}
    >
      {label}
    </button>
  );
}
