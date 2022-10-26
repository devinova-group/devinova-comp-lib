import React from "react";

export type speedType = "slow" | "medium" | "fast";

export interface loadingProps {
  speed?: speedType;
  style?: React.CSSProperties;
  className?: string;
  progress?: "error" | "success";
}
