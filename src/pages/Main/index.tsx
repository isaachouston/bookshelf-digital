import React from "react";
import { Grid } from "@material-ui/core";
import { PageHeader } from "../../components/Header";
import { ListBooks } from "../../components/ListBooks";
import { IListBooks } from "./interfaces/IListBooks";
import { useBook } from "../../context/BookContext";
import { ButtonMoreBooks, Loading } from "./styles";

export const Main: React.FC<IListBooks> = () => {
  const { listBooks, GetBooksDataMore, loading } = useBook();

  const handleMorePage = () => {
    GetBooksDataMore();
  };

  return (
    <Grid container>
      <Grid container>
        <PageHeader />
      </Grid>
      <Grid container>
        {listBooks?.map((item) => (
          <Grid
            container
            justify="center"
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <ListBooks
              title={item?.volumeInfo?.title}
              thumbnail={item.volumeInfo.imageLinks?.thumbnail}
              id={item.id}
            />
          </Grid>
        ))}
        <Grid container justify="center" style={{marginBottom: 50}}>
          {
            loading ? 
            <Loading />
            :
            <ButtonMoreBooks onClick={() => handleMorePage()}>Load more</ButtonMoreBooks>
          }
        </Grid>
      </Grid>
    </Grid>
  );
};
