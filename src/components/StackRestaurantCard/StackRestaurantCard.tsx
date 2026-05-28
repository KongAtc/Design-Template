import type * as React from "react";
import { getStackTheme, mergeStyles, type StackThemeName } from "../stackTheme.js";

export interface StackRestaurantCardData {
  name: string;
  cuisine: string;
  rating: number;
  eta: string;
  fee: string;
  imageUrl: string;
  tag?: string;
}

export interface StackRestaurantCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Restaurant content displayed in the card. */
  restaurant: StackRestaurantCardData;
  /** Named palette from the Stack design template. */
  themeName?: StackThemeName;
}

export function StackRestaurantCard({
  restaurant,
  themeName = "sage",
  style,
  ...divProps
}: StackRestaurantCardProps) {
  const theme = getStackTheme(themeName);

  return (
    <div
      {...divProps}
      style={mergeStyles(
        {
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: 10
        },
        style
      )}
    >
      <div
        style={{
          aspectRatio: "16 / 10",
          background: theme.surface2,
          borderRadius: 18,
          overflow: "hidden",
          position: "relative"
        }}
      >
        <img
          alt={restaurant.name}
          src={restaurant.imageUrl}
          style={{ display: "block", height: "100%", objectFit: "cover", width: "100%" }}
        />
        {restaurant.tag ? (
          <div
            style={{
              background: theme.bg,
              borderRadius: 999,
              color: theme.ink,
              fontSize: 10.5,
              fontWeight: 600,
              left: 10,
              letterSpacing: 0,
              padding: "5px 9px",
              position: "absolute",
              top: 10
            }}
          >
            {restaurant.tag}
          </div>
        ) : null}
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            borderRadius: 999,
            bottom: 10,
            color: "#FFFFFF",
            fontSize: 11,
            fontWeight: 500,
            padding: "5px 9px",
            position: "absolute",
            right: 10
          }}
        >
          {restaurant.eta}
        </div>
      </div>
      <div style={{ alignItems: "flex-start", display: "flex", gap: 8, justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
          <div style={{ color: theme.ink, fontSize: 17, fontWeight: 600, letterSpacing: 0, lineHeight: 1.2 }}>
            {restaurant.name}
          </div>
          <div style={{ color: theme.muted, fontSize: 12.5 }}>
            {restaurant.cuisine} · {restaurant.fee} fee
          </div>
        </div>
        <div style={{ color: theme.ink, flexShrink: 0, fontSize: 13, fontWeight: 600 }}>
          ★ {restaurant.rating.toFixed(1)}
        </div>
      </div>
    </div>
  );
}
