import React, { FC } from "react";
import styled from "styled-components";
import { HomeCatalogProps } from "@/components/pages/Home/HomeCatalog/HomeCatalog.types";
import { Card } from "@/components/ui/Card";
import { useAppSelector } from "@/store/store";
import { selectSubjectPriorities } from "@/store/selectors/advert";

const Wrapper = styled.div`
  .catalog__title {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: var(--color-black);
    margin-bottom: 20px;
  }

  .catalog__list {
    list-style: none;
  }

  .catalog__item {
    display: flex;
    align-items: center;
    color: var(--color-black);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 80px;
  }

  .catalog__item span {
    width: 50px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .catalog__item.active {
    border-radius: 10px;
    border: 1px solid #f3f4f5;
  }
`;

const HomeCatalog: FC<HomeCatalogProps> = () => {
  const subjectPriorities = useAppSelector(selectSubjectPriorities);

  return (
    subjectPriorities.length > 0 && (
      <Card radius="10px">
        <Wrapper>
          <h2 className="catalog__title">Приоритет категорий</h2>
          <ul className="catalog__list">
            {subjectPriorities.map((item, index) => (
              <li
                key={item.id}
                className={`catalog__item ${(index + 1) % 2 === 0 && "active"}`}
              >
                <span>{item.position}</span>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </Wrapper>
      </Card>
    )
  );
};

export default React.memo(HomeCatalog);
