import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import BookImg from "../../assets/hp.jpg";
import { Movie, Star } from "@material-ui/icons";
import { Container, TitleBook } from "./styles";
import { Link } from "react-router-dom";
import { useBook } from "../../context/BookContext";

interface IListBookProps {
  title: string;
  thumbnail: string;
  id: string;
}

export const ListBooks: React.FC<IListBookProps> = ({
  title,
  thumbnail,
  id,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { listFavoriteBooks, setListFavoriteBooks, listBooks } = useBook();
  // const saveFavorite = localStorage.getItem('@bookshelf/favorite');

  const onClickEnable = () => {
    if (isFavorite) {
      const listFavoriteBooksData = listFavoriteBooks.filter(
        (item) => item !== id
      );
      console.log("books1", listFavoriteBooks);

      console.log("1", listFavoriteBooksData);

      setListFavoriteBooks(listFavoriteBooksData);
      setIsFavorite(false);
    } else {
      let listFavoriteBooksData = [...listFavoriteBooks];

      listFavoriteBooksData.push(id);
      console.log("book2", listFavoriteBooks);
      console.log("2", listFavoriteBooksData);

      setListFavoriteBooks(listFavoriteBooksData);
      // localStorage.setItem('@bookshelf/favorite', id);
      setIsFavorite(true);
    }
  };

  return (
    <Container>
      <Grid item xs={12} md={12} lg={12}>
        <Link to={`datails/${id}`} style={{ textDecoration: "none" }}>
          <Grid item xs={12} md={12} lg={12}>
            <img src={thumbnail} alt="Capa livro" />
          </Grid>
          <Grid container alignItems="center" item xs={12} md={12} lg={12}>
            {/* <Movie style={{ color: "#455a64" }} /> */}
            <TitleBook>{title}</TitleBook>
          </Grid>
        </Link>
        <Star
          style={{ color: isFavorite ? "#FF0" : "#455a64" }}
          onClick={() => onClickEnable()}
        />
      </Grid>
    </Container>
  );
};
