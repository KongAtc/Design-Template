import type * as React from "react";

export type StackThemeName = "sage" | "terracotta" | "slate" | "cobalt";

export type StackTheme = {
  bg: string;
  surface: string;
  surface2: string;
  ink: string;
  ink2: string;
  muted: string;
  line: string;
  primary: string;
  primaryInk: string;
  accent: string;
  chip: string;
};

export const stackThemes: Record<StackThemeName, StackTheme> = {
  sage: {
    bg: "#F3F2EC",
    surface: "#FFFFFF",
    surface2: "#E9E7DE",
    ink: "#161814",
    ink2: "#4A4D44",
    muted: "#8C8E84",
    line: "#E3E1D7",
    primary: "#1F4D3F",
    primaryInk: "#FFFFFF",
    accent: "#D9543A",
    chip: "#E9E7DE"
  },
  terracotta: {
    bg: "#FAF6F0",
    surface: "#FFFFFF",
    surface2: "#F1ECE2",
    ink: "#1F1A14",
    ink2: "#534B40",
    muted: "#928879",
    line: "#EAE3D5",
    primary: "#B5462E",
    primaryInk: "#FFFFFF",
    accent: "#2E6E5B",
    chip: "#F1ECE2"
  },
  slate: {
    bg: "#F4F4F5",
    surface: "#FFFFFF",
    surface2: "#EAEAEC",
    ink: "#0A0A0B",
    ink2: "#3F3F46",
    muted: "#8A8A91",
    line: "#E4E4E7",
    primary: "#0A0A0B",
    primaryInk: "#FFFFFF",
    accent: "#F0B400",
    chip: "#EAEAEC"
  },
  cobalt: {
    bg: "#F2F3F7",
    surface: "#FFFFFF",
    surface2: "#E6E8F1",
    ink: "#0B1530",
    ink2: "#3A4368",
    muted: "#8088A4",
    line: "#DEE1EC",
    primary: "#2647C5",
    primaryInk: "#FFFFFF",
    accent: "#FF9F1C",
    chip: "#E6E8F1"
  }
};

export function getStackTheme(name: StackThemeName = "sage"): StackTheme {
  return stackThemes[name];
}

export function mergeStyles(
  base: React.CSSProperties,
  override?: React.CSSProperties
): React.CSSProperties {
  return override ? { ...base, ...override } : base;
}
