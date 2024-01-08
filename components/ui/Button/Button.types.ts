import React from "react";

export interface ButtonProps {
  height?: string;
  width?: string;
  outlined?: boolean;
  importance?: "yellow" | "white";
  onClick?: () => void;
  children: React.ReactNode;
  paddingX?: string;
  radius?: string;
  type?: "button" | "submit" | "reset";
}
