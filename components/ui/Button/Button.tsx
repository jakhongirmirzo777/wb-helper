import React, { FC } from "react";
import styled from "styled-components";
import { ButtonProps } from "@/components/ui/Button/Button.types";

const Wrapper = styled.button<ButtonProps>`
  border-radius: ${({ radius }) => radius};
  background-color: ${({ importance, outlined }) =>
    importance === "yellow"
      ? "var(--color-yellow-1)"
      : outlined
      ? "transparent"
      : "var(--color-white)"};
  border: ${({ importance, outlined }) =>
    importance === "yellow"
      ? "none"
      : outlined
      ? "1px solid var(--color-gray-2)"
      : "1px solid var(--color-gray-3)"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-black-1);
  transition: all 0.2s ease-in-out;
  padding-left: ${({ paddingX }) => paddingX};
  padding-right: ${({ paddingX }) => paddingX};

  &:active {
    transform: scale(0.95);
  }
`;

const Button: FC<ButtonProps> = ({
  outlined = false,
  importance = "yellow",
  height = "55px",
  width = "100%",
  paddingX = "10px",
  radius = "4px",
  type = "button",
  children,
  onClick,
}) => {
  return (
    <Wrapper
      type={type}
      outlined={outlined}
      height={height}
      width={width}
      importance={importance}
      paddingX={paddingX}
      radius={radius}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
