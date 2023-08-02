export interface IOptions {
  options: IOption[];
  select: string;
  setSelect: (value: string) => void;
}

interface IOption {
  value: string;
  name: string;
}
