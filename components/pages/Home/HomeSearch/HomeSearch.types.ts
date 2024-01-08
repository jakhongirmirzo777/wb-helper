export interface HomeSearchProps {
  search: string;
  setSearch: (val: string) => void;
  regionId: number | null;
  setRegionId: (val: number) => void;
  loadAdvertsData: (args: { input: string; region_id: number | null }) => void;
}
