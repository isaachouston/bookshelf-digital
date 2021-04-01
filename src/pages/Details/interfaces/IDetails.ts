export interface IDatails {
  authors: IAuthor;
  categories: ICategory;
  description: string;
  pageCount: number;
  publishedDate: Date;
  title: string;
  subtitle?: string;
}

export interface ICategory {
  cotegory: string;
}
export interface IAuthor {
  author: string;
}