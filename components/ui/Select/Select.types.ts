export interface Item {
  text: string;
  value: number;
}

export interface SelectProps {
  label: string;
  value: number;
  items: Item[];
  onChange: (value: number) => void;
  itemText?: string;
  itemValue?: number;
  height?: string;
}
