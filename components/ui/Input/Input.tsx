import React, { FC } from "react";
import styled from "styled-components";
import { InputProps } from "@/components/ui/Input/Input.types";

const Wrapper = styled.div<Partial<InputProps>>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  position: relative;
  display: flex;
  align-items: center;

  .input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--color-black);
    border-bottom: 1px solid var(--color-gray-2);
    transition: all 0.2s ease-in-out;
  }

  .input::placeholder {
    color: var(--color-gray-1);
  }

  .input:focus {
    outline: none;
    border-bottom-color: var(--color-black);
  }

  .icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Input: FC<InputProps> = ({
  height = "55px",
  width = "100%",
  placeholder,
  value,
  onChange,
  icon,
}) => {
  return (
    <Wrapper height={height} width={width}>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="icon">{icon ? icon : null}</span>
    </Wrapper>
  );
};

export default Input;
