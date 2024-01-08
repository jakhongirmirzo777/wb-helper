import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  HomeAdvertProps,
  Bet,
} from "@/components/pages/Home/HomeAdvert/HomeAdvert.types";
import { useGetRegionQuery } from "@/store/api/api";
import { Region } from "@/store/slices/region";
import { useAppSelector } from "@/store/store";
import { selectBets } from "@/store/selectors/advert";

const Wrapper = styled.div`
  .advert__regions {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }

  .advert__info {
    margin-bottom: 20px;
  }

  .advert__description {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--color-gray-1);
  }

  .advert__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .advert__table {
    margin-bottom: 10px;
  }

  .advert__table table {
    width: 100%;
    border-collapse: collapse;
  }

  .advert__table thead {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  .advert__table th {
    padding: 10px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .advert__table th:first-child {
    border-radius: 10px 0 0 10px;
  }

  .advert__table th:last-child {
    border-radius: 0 10px 10px 0;
  }

  .advert__table td {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .advert__table tbody tr:nth-child(even) {
    background-color: var(--color-white);
  }

  .advert__table tbody tr:nth-child(even) td:first-child {
    border-radius: 10px 0 0 10px;
  }

  .advert__table tbody tr:nth-child(even) td:last-child {
    border-radius: 0 10px 10px 0;
  }

  .advert__table .image {
    border-radius: 2px;
    height: 65px;
    width: 50px;
  }

  .advert__table .article {
    color: var(--color-blue);
  }

  .advert__table .cpm {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    min-width: 100px;
    border-radius: 10px;
    background-color: var(--color-yellow-2);
  }
`;

const columnHelper = createColumnHelper<Bet>();

const columns = [
  columnHelper.accessor("advert_id", {
    header: () => "Место",
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor("image", {
    header: () => "Фото",
    cell: (info) => (
      <img className="image" src={info.renderValue() || ""} alt="photo" />
    ),
  }),
  columnHelper.accessor("article", {
    header: () => "Артикул",
    cell: (info) => (
      <Link className="article" href="/">
        {info.renderValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("position", {
    header: () => "Позиция",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("cpm", {
    header: () => "Ставка",
    cell: (info) => <span className="cpm">{info.renderValue()} ₽</span>,
  }),
  columnHelper.accessor("subject", {
    header: () => "Категория",
    cell: (info) => info.renderValue()?.name || "",
  }),
  columnHelper.accessor("delivery_time", {
    header: () => "Доставка",
    cell: (info) => <span>{info.renderValue()} ч</span>,
  }),
];

const HomeAdvert: FC<HomeAdvertProps> = ({
  search,
  regionId,
  setRegionId,
  loadAdvertsData,
}) => {
  const { data: regionData } = useGetRegionQuery();
  const bets = useAppSelector(selectBets);

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Bet[]>(() => []);
  const pages = bets.reduce(
    (acc, cur) => {
      const currentPage = acc[acc.length - 1];
      return currentPage < cur.page ? [...acc, cur.page] : acc;
    },
    [1]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    const pagedBets = bets.filter((bet) => bet.page === currentPage);
    setData([...pagedBets]);
  }, [bets, currentPage]);

  useEffect(() => {
    if (regionId) {
      loadAdvertsData({
        input: search,
        region_id: regionId,
      });
    }
  }, [regionId]);
  return (
    bets?.length > 0 && (
      <Wrapper>
        <div className="advert__info">
          <ul className="advert__regions">
            {regionData?.map((region: Region) => (
              <li key={region.id} className="advert__region">
                <Button
                  height="35px"
                  importance="white"
                  outlined={regionId !== region.id}
                  onClick={() => setRegionId(region.id)}
                >
                  {region.name}
                </Button>
              </li>
            ))}
          </ul>
          <p className="advert__description">
            Est ipsum gravida sit non. Mi ac habitasse proin sollicitudin
            malesuada blandit. Arcu turpis cursus imperdiet diam tincidunt augue
            ut. Metus proin vel consectetur ipsum quis amet faucibus mus.
            Placerat cras ac amet dictum. Massa sed cursus dapibus morbi turpis
            velit id mauris at.
          </p>
        </div>
        <div className="advert__table">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="advert__pagination">
          {bets.length > 0 &&
            pages.map((page) => (
              <Button
                key={page}
                height="55px"
                width="55px"
                importance="white"
                radius="10px"
                outlined={currentPage !== page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
        </div>
      </Wrapper>
    )
  );
};

export default React.memo(HomeAdvert);
