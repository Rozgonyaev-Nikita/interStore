export interface IOptions {
  options: IOption[];
  // select: string;
  // setSelect: (value: string) => void;
}

interface IOption {
  value: string;
  name: string;
}

export interface IType {
  title: "string";
  description: "string";
  category: "string";
}

export interface ISort {
  categor: string;
  filterCategory: string[];
}
