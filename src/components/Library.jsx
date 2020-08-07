import React, { useContext } from "react";

//Material-ui
import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Books from "./Books";
import { BookContext } from "../contexts/BookContext";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem 1rem 4rem 1rem",
    textAlign: "center",
  },
  head: {
    margin: "1rem ",
  },
}));

const Library = () => {
  const classes = useStyles();

  const { books } = useContext(BookContext);

  return (
    <Box component="div" className={classes.root}>
      <Typography variant="h5" className={classes.head}>
        Your Library
      </Typography>
      {books.length ? (
        <Grid container justify="center" spacing={3}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} key={book.id} className={classes.books}>
              <Books book={book} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>No books to read</div>
      )}
    </Box>
  );
};

export default Library;
