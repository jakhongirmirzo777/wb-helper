import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { SvgChevronDown } from "@/assets/icons";
import { SelectProps, Item } from "@/components/ui/Select/Select.types";

const Wrapper = styled.div<{ isOpen: boolean; height: string }>`
  position: relative;

  .menus {
    list-style: none;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transform: translateX(-50%);
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    min-width: 100%;
    border-radius: 8px;
    padding: 6px 0;
    transition: all 0.2s ease-in-out;
  }

  .menu {
    padding: 8px 15px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .menu:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .icon {
    transition: all 0.2s ease-in-out;
    transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  }

  .select__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-cloud);
    padding: 7px 10px;
    border-radius: 4px;
    cursor: pointer;
    height: ${({ height }) => height};
  }

  .select__wrapper:focus {
    outline: 1px solid var(--color-black);
  }

  .select__left {
    display: flex;
    flex-direction: column;
    margin-right: 5px;
  }

  .label {
    color: var(--color-gray-1);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 3px;
  }

  .value {
    color: var(--color-black);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .select {
    display: none;
  }
`;

const Select: FC<SelectProps> = ({
  label,
  value,
  items,
  height = "55px",
  itemText = "text",
  itemValue = "value",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".select__wrapper")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);
  return (
    <Wrapper isOpen={isOpen} height={height}>
      <div
        className="select__wrapper"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="select"
      >
        <span className="select__left">
          <span className="label">{label}</span>
          <span className="value">
            {items?.find((item) => item.value === value)?.text}
          </span>
        </span>
        <SvgChevronDown className="icon" />
      </div>
      <ul className="menus">
        {items.map((item: Item, index) => (
          <li
            key={index}
            className="menu"
            onClick={() => {
              // @ts-ignore
              onChange(item[itemValue]);
            }}
          >
            {
              // @ts-ignore
              item[itemText]
            }
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Select;
