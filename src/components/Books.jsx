import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Rating from "@material-ui/lab/Rating";
import DeleteIcon from "@material-ui/icons/Delete";
import { BookContext } from "../contexts/BookContext";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "lightgrey",
    border: "1px solid black",
  },
  finished: {
    background: "green",
  },
  currently: {
    background: "red",
  },
  cardButtons: {
    flex: "1",
  },
}));

const Books = ({ book }) => {
  const classes = useStyles();

  const [stars, setStars] = useState(0);

  useEffect(() => {
    setStars(book.rating);
  }, [book]);

  const { dispatch } = useContext(BookContext);

  const removeBook = (e) => {
    dispatch({ type: "REMOVE_BOOK", id: book.id });
  };

  const toggleRead = (e) => {
    dispatch({ type: "UPDATE_BOOK", id: book.id });
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="subtitle1">By: {book.author}</Typography>
          <Typography variant="subtitle2">{book.genre}</Typography>
          <Rating name="read-only" value={stars} readOnly />
          <CardActions>
            <Box component="div" className={classes.cardButtons}>
              {book.isRead ? (
                <Button
                  variant="outlined"
                  className={classes.finished}
                  onClick={toggleRead}
                >
                  Finished
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  className={classes.currently}
                  onClick={toggleRead}
                >
                  Currently Reading
                </Button>
              )}
            </Box>
          </CardActions>
          <IconButton classes={classes.removeBook} onClick={removeBook}>
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
};

export default Books;
