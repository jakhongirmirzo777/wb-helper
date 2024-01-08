import React from "react";

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  height?: string;
  width?: string;
  icon?: React.ReactNode;
}
