export interface HomeAdvertProps {
  search: string;
  setSearch: (val: string) => void;
  regionId: number | null;
  setRegionId: (val: number) => void;
  loadAdvertsData: (args: { input: string; region_id: number | null }) => void;
}

export interface Bet {
  article: number;
  url: string;
  image: string;
  image_big: string;
  advert_id: number;
  cpm: number;
  position: number;
  position_on_page: number;
  page: number;
  subject: {
    id: number;
    name: string;
  };
  delivery_time: number;
}
