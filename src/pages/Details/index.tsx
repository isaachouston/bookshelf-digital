import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useBook } from "../../context/BookContext";
import api from "../../service/api";
import { IDatails } from "./interfaces/IDetails";
import { ButtonBack, Text, Arrow, Title, TextArrow, Loading } from "./styles";

export const Datails = () => {
  const [book, setBook] = useState<IDatails>({} as IDatails);
  const { id } = useParams<Record<string, string | undefined>>();
  const history = useHistory();
  const { setLoading, loading } = useBook();

  const GetBookData = async () => {
    setLoading(true);
    const response = await api.get(`volumes/${id}`);
    const bookResponse = response.data.volumeInfo;
    setBook(bookResponse);
    setLoading(false);
  };

  useEffect(() => {
    GetBookData();
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <Grid container justify="center" alignItems="center">
      {loading ? (
        <Grid container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
          <Loading />
        </Grid>
      ) : (
        <Grid container item xs={8} md={8} lg={8}>
          <Grid container justify="center">
            <Title>
              Book <strong>details</strong>
            </Title>
          </Grid>
          <Grid container>
            <Grid
              container
              justify="flex-end"
              style={{ padding: 16 }}
              alignItems="center"
            >
              <ButtonBack onClick={goBack}>
                <Arrow />
                <TextArrow>Go back</TextArrow>
              </ButtonBack>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Text>Title: {book.title}</Text>
            <Text>Subtitle: {book.subtitle}</Text>
            <Text>Author: {book.authors}</Text>
            <Text>Year of publication: {book.publishedDate}</Text>
            <Text>Total pages: {book.pageCount}</Text>
            <Text>Description:</Text>
            <Text>
              {book.description ? book.description : "No description"}
            </Text>
            <Text>
              Categories: {book.categories ? book.categories : "No categories"}
            </Text>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
