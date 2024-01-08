import React, { FC, useState } from "react";
import styled from "styled-components";
import { Card } from "@/components/ui/Card";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { SvgSearch } from "@/assets/icons";
import { Button } from "@/components/ui/Button";

import { HomeSearchProps } from "@/components/pages/Home/HomeSearch/HomeSearch.types";

const Wrapper = styled.div`
  .search__title {
    color: var(--color-black);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
  }

  .search__content {
    display: flex;
    align-items: center;
  }

  .search__select {
    width: 225px;
    margin-right: 20px;
  }

  .search__input {
    display: flex;
    flex: 1;
    margin-right: 20px;
  }
`;

const typeList = [
  {
    text: "Поиск",
    value: 1,
  },
  {
    text: "Карточка",
    value: 2,
  },
  {
    text: "Каталог",
    value: 3,
  },
];

const HomeSearch: FC<HomeSearchProps> = ({
  search,
  setSearch,
  regionId,
  loadAdvertsData,
}) => {
  const [type, setType] = useState(1);

  return (
    <Card>
      <Wrapper>
        <h1 className="search__title">Актуальные ставки</h1>
        <form
          className="search__content"
          onSubmit={(e) => {
            e.preventDefault();
            loadAdvertsData({
              input: search,
              region_id: regionId,
            });
          }}
        >
          <div className="search__select">
            <Select
              label="Тип"
              value={type}
              items={typeList}
              onChange={(val) => setType(val)}
            />
          </div>
          <div className="search__input">
            <Input
              placeholder="Поиск по названию или артикулу"
              value={search}
              onChange={(val) => setSearch(val)}
              icon={<SvgSearch />}
            />
          </div>
          <div className="search__btn">
            <Button
              type="submit"
              width="225px"
              onClick={() =>
                loadAdvertsData({
                  input: search,
                  region_id: regionId,
                })
              }
            >
              Найти
            </Button>
          </div>
        </form>
      </Wrapper>
    </Card>
  );
};

export default React.memo(HomeSearch);
