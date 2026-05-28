import type * as React from "react";
import { getStackTheme, mergeStyles, type StackThemeName } from "../stackTheme.js";

export interface StackScreenFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Named palette from the Stack design template. */
  themeName?: StackThemeName;
  /** Width of the prototype phone frame. */
  width?: number;
  /** Height of the prototype phone frame. */
  height?: number;
}

export function StackScreenFrame({
  children,
  themeName = "sage",
  width = 402,
  height = 874,
  style,
  ...divProps
}: StackScreenFrameProps) {
  const theme = getStackTheme(themeName);

  return (
    <div
      {...divProps}
      style={mergeStyles(
        {
          background: theme.bg,
          borderRadius: 48,
          boxShadow: "0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)",
          color: theme.ink,
          fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
          height,
          overflow: "hidden",
          position: "relative",
          width
        },
        style
      )}
    >
      <div
        aria-hidden="true"
        style={{
          background: "#000000",
          borderRadius: 24,
          height: 37,
          left: "50%",
          position: "absolute",
          top: 11,
          transform: "translateX(-50%)",
          width: 126,
          zIndex: 50
        }}
      />
      {children}
      <div
        aria-hidden="true"
        style={{
          alignItems: "flex-end",
          bottom: 0,
          display: "flex",
          height: 34,
          justifyContent: "center",
          left: 0,
          paddingBottom: 8,
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          zIndex: 60
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.25)",
            borderRadius: 100,
            height: 5,
            width: 139
          }}
        />
      </div>
    </div>
  );
}
