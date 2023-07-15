export interface ITovar {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  rating?: IRating;
}

export interface ITovarWithCount extends ITovar {
  count: number;
  isFavoutites?: boolean;
}

export interface ITovarProps {
  tovar: ITovar;
}

export interface ITovarsCount {
  tovars: ITovarWithCount[];
  countAll: number;
  favoritesTovars: ITovarWithCount[];
}

interface IRating {
  rate: number;
  count: number;
}
