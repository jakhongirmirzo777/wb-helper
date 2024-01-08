import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { SvgChevronDown } from "@/assets/icons";
import { MenuProps } from "@/components/ui/Menu/Menu.types";

const Wrapper = styled.div<{
  isOpen: boolean;
}>`
  position: relative;

  .title__wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2px 0;
    position: relative;
  }

  .title__wrapper::before {
    content: "";
    width: 0;
    height: 2px;
    background-color: var(--color-yellow-1);
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .title__wrapper:hover::before {
    width: 100%;
  }

  .title__wrapper:hover .title {
    color: var(--color-black);
  }

  .title {
    color: ${({ isOpen }) =>
      isOpen ? "var(--color-black)" : "var(--color-gray-1)"};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
  }

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
    z-index: 999;
  }

  .menu {
    padding: 8px 15px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: var(--color-black);
    font-size: 16px;
    white-space: nowrap;
  }

  .menu:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .icon {
    transition: all 0.2s ease-in-out;
    transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  }
`;

const Menu: FC<MenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.closest(".title__wrapper")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);

  return (
    <Wrapper isOpen={isOpen}>
      <div className="title__wrapper" onClick={() => setIsOpen(!isOpen)}>
        <span className="title">{title}</span>
        <SvgChevronDown className="icon" />
      </div>
      <ul className="menus">
        {items.map((item, index) => (
          <li key={index} className="menu">
            {item}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Menu;
