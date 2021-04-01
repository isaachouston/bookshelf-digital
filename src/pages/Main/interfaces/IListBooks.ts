export interface IListBooks {
    volumeInfo: IBook;
    id: string;
  }
  
  interface IBook {
    title: string;
    imageLinks: IImageLink;
  }
  
  interface IImageLink {
    thumbnail: string;  
  }
  
  