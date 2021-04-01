import React from "react";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Container, Title } from "./styles";
import { useBook } from "../../context/BookContext";

export const PageHeader = () => {  

  const { setBookSearch, bookSearch } = useBook();

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setBookSearch(event.target.value);
  }; 

  return (
    <Container>
      <Grid container justify="center" className="container-header">
        <Grid container alignItems="center" item xs={12} md={8} lg={8}>
          <Grid item xs={12} md={6} lg={6}>
            <Title>
              Bookshelf <strong>Digital</strong>
            </Title>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              size="small"
              label="Search by author, title"
              name="search-books"
              variant="outlined"
              color="primary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Search style={{ fontSize: 24, color: "#2d88ff" }} />
                  </InputAdornment>
                ),
              }}
              onChange={handleChangeFilter}
              value={bookSearch}
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
