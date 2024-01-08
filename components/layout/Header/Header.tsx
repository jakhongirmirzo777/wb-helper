import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { SvgBell, SvgChevronDown, SvgLogo } from "@/assets/icons";
import { Menu } from "@/components/ui/Menu";

const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__left {
    display: flex;
    align-items: center;
  }

  .header__logo {
    margin-right: 30px;
  }

  .header__navs {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .header__nav {
    margin-right: 30px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--color-gray-1);
    transition: all 0.2s ease-in-out;
    position: relative;
    padding: 2px 0;
  }

  .header__nav.menu {
    padding: 0;
  }

  .header__nav.menu:before {
    display: none;
  }

  .header__nav:hover {
    color: var(--color-black);
  }

  .header__nav:hover::before {
    width: 100%;
  }

  .header__nav::before {
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

  .header__nav a {
    text-decoration: none;
    color: inherit;
  }

  .header__avatar {
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .header__avatar img {
    margin-right: 5px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;

const companyList = ["Управление", "Детальная статистика"];
const opportunitiesList = ["ABC-анализ"];

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header__left">
        <Link href="/">
          <SvgLogo className="header__logo" />
        </Link>
        <ul className="header__navs">
          <li className="header__nav ">
            <Link href="/">Продавцы</Link>
          </li>
          <li className="header__nav menu">
            <Menu title="Мои кампании" items={companyList} />
          </li>
          <li className="header__nav">
            <Link href="/">Актуальные ставки</Link>
          </li>
          <li className="header__nav menu">
            <Menu title="Возможности" items={opportunitiesList} />
          </li>
        </ul>
      </div>
      <div className="header__right">
        <ul className="header__navs">
          <li className="header__nav">
            <Link href="/">Поддержка</Link>
          </li>
          <li className="header__nav">
            <Link href="/">Тарифы</Link>
          </li>
          <li>
            <SvgBell className="cursor-pointer" />
          </li>
          <li className="header__avatar">
            <img src="/avatar.png" alt="avatar" />
            <SvgChevronDown />
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
