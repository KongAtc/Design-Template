import type * as React from "react";
import { StackAvatar } from "../StackAvatar/StackAvatar.js";
import { getStackTheme, mergeStyles, type StackThemeName } from "../stackTheme.js";

export interface StackGroupMember {
  id: string;
  name: string;
  color: string;
  joined: boolean;
}

export interface StackGroupBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Restaurant or group-order title. */
  title: string;
  /** Human-readable order close time. */
  deadline: string;
  /** Team members participating in the group order. */
  members: StackGroupMember[];
  /** Named palette from the Stack design template. */
  themeName?: StackThemeName;
}

export function StackGroupBanner({
  title,
  deadline,
  members,
  themeName = "sage",
  style,
  ...divProps
}: StackGroupBannerProps) {
  const theme = getStackTheme(themeName);
  const joined = members.filter((member) => member.joined);

  return (
    <div
      {...divProps}
      style={mergeStyles(
        {
          background: theme.ink,
          borderRadius: 22,
          color: theme.bg,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          overflow: "hidden",
          padding: "16px 18px",
          position: "relative"
        },
        style
      )}
    >
      <div aria-hidden="true" style={{ background: theme.accent, height: 3, left: 0, position: "absolute", right: 0, top: 0 }} />
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <div style={{ alignItems: "center", display: "flex", gap: 6 }}>
          <div style={{ background: theme.accent, borderRadius: 4, height: 7, width: 7 }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", opacity: 0.78, textTransform: "uppercase" }}>
            Live group order
          </span>
        </div>
        <span style={{ fontFamily: "Geist Mono, ui-monospace, monospace", fontSize: 11, opacity: 0.6 }}>
          closes {deadline}
        </span>
      </div>
      <div style={{ alignItems: "flex-end", display: "flex", gap: 12, justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 0, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ fontSize: 12.5, opacity: 0.65 }}>
            {joined.length} of {members.length} teammates have ordered
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {joined.slice(0, 4).map((member, index) => (
            <StackAvatar
              key={member.id}
              name={member.name}
              color={member.color}
              size={26}
              ring={theme.ink}
              style={{ marginLeft: index === 0 ? 0 : -8 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
