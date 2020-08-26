import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";

import { BookContext } from "../contexts/BookContext";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fields: {
    width: "20rem",
    justifyContent: "center",
    margin: "0.5rem",
  },
  submitBtn: {
    width: "15rem",
  },
  autocomplete: {
    background: "#efefef",
    width: "20rem",
  },
}));

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    rating: 0,
    isRead: false,
  });

  const { dispatch } = useContext(BookContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_BOOK",
      book,
    });

    setBook({
      title: "",
      author: "",
      genre: "",
      rating: 0,
      isRead: false,
    });

    history.push("/Book-Tracker/");
  };

  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          className={classes.fields}
          type="text"
          label="Title"
          required
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />

        <TextField
          variant="outlined"
          className={classes.fields}
          type="text"
          label="Author"
          required
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />

        <TextField
          className={classes.fields}
          variant="outlined"
          type="text"
          label="Genre"
          required
          value={book.genre}
          onChange={(e) => setBook({ ...book, genre: e.target.value })}
        />

        <TextField
          className={classes.fields}
          variant="outlined"
          type="number"
          label="Rating (1-5)"
          inputProps={{ min: "0", max: "5" }}
          required
          value={book.rating}
          onChange={(e) => setBook({ ...book, rating: e.target.value })}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={book.isRead}
              onChange={(e) => setBook({ ...book, isRead: !book.isRead })}
              name="isRead"
              color="primary"
            />
          }
          label="Finished Reading"
        />

        <Button variant="outlined" type="submit" className={classes.submitBtn}>
          Add Book
        </Button>
      </form>
    </Box>
  );
};

export default AddBook;
