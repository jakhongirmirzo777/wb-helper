import { useCallback, useState } from "react";
import styled from "styled-components";
import HomeSearch from "@/components/pages/Home/HomeSearch/HomeSearch";
import HomeAdvert from "@/components/pages/Home/HomeAdvert/HomeAdvert";
import HomeCatalog from "@/components/pages/Home/HomeCatalog/HomeCatalog";
import { useLazyGetAdvertsQuery } from "@/store/api/api";
import Loading from "@/components/layout/Loading/Loading";
import { type } from "os";

const SearchWrapper = styled.div`
  margin-bottom: 40px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const AdvertWrapper = styled.div`
  width: calc(100% / 3 * 2 - 10px);
`;

const CatalogWrapper = styled.div`
  width: calc(100% / 3 - 10px);
`;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: var(--color-black);
  font-weight: 500;
`;

export default function Home() {
  const [loadAdverts, { isLoading, error }] = useLazyGetAdvertsQuery();
  const [search, setSearch] = useState("");
  const [regionId, setRegionId] = useState<null | number>(null);

  const loadAdvertsData = useCallback(
    ({ input, region_id }: { input: string; region_id?: number | null }) => {
      if (input && region_id) {
        loadAdverts({
          input,
          region_id,
        });
      } else if (input && !region_id) {
        loadAdverts({
          input,
        });
      }
    },
    [loadAdverts]
  );

  return (
    <>
      <SearchWrapper>
        <HomeSearch
          search={search}
          setSearch={setSearch}
          regionId={regionId}
          setRegionId={setRegionId}
          loadAdvertsData={loadAdvertsData}
        />
      </SearchWrapper>
      {isLoading && !error ? (
        <Loading />
      ) : !isLoading && error ? (
        <ErrorMessage>Ничего не найдено</ErrorMessage>
      ) : (
        <ContentWrapper>
          <AdvertWrapper>
            <HomeAdvert
              search={search}
              setSearch={setSearch}
              regionId={regionId}
              setRegionId={setRegionId}
              loadAdvertsData={loadAdvertsData}
            />
          </AdvertWrapper>
          <CatalogWrapper>
            <HomeCatalog />
          </CatalogWrapper>
        </ContentWrapper>
      )}
    </>
  );
}
