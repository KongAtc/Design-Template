import type * as React from "react";
import { mergeStyles } from "../stackTheme.js";

export interface StackAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Person or team member name used to derive initials. */
  name: string;
  /** Avatar background color. */
  color?: string;
  /** Avatar diameter in pixels. */
  size?: number;
  /** Optional ring color used when avatars overlap on dark surfaces. */
  ring?: string;
}

export function StackAvatar({
  name,
  color = "#666666",
  size = 28,
  ring,
  style,
  ...divProps
}: StackAvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      {...divProps}
      aria-label={name}
      style={mergeStyles(
        {
          alignItems: "center",
          background: color,
          borderRadius: 999,
          boxShadow: ring ? `0 0 0 2px ${ring}` : undefined,
          color: "#FFFFFF",
          display: "flex",
          flexShrink: 0,
          fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
          fontSize: Math.round(size * 0.38),
          fontWeight: 600,
          height: size,
          justifyContent: "center",
          letterSpacing: 0,
          width: size
        },
        style
      )}
    >
      {initials}
    </div>
  );
}
