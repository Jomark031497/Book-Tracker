import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Material-ui
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    minHeight: "10vh",
  },
  title: {
    letterSpacing: "0.3rem",
    flex: "1",
    color: theme.palette.secondary.main,
    fontSize: "1.5rem",
  },
  bottomNav: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    borderTop: "1px solid black",
    background: "rgba(0,0,0,0.4)",
    zIndex: "1",
  },
  navButtons: {
    margin: "auto 1rem",
    color: "#fff",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [bottomNav, setBottomNav] = useState(0);
  const history = useHistory();

  return (
    <Box component="div" className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            BOOK TRACKER
          </Typography>

          <Hidden xsDown>
            <Box component="div">
              <Button
                className={classes.navButtons}
                onClick={() => history.push("/Book-Tracker/")}
              >
                Library
              </Button>
              <Button
                className={classes.navButtons}
                onClick={() => history.push("/Book-Tracker/addbook")}
              >
                Add Book
              </Button>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <BottomNavigation
          value={bottomNav}
          showLabels
          className={classes.bottomNav}
          onChange={(e, newVal) => setBottomNav(newVal)}
        >
          <BottomNavigationAction
            label="Library"
            onClick={() => history.push("/")}
            icon={<MenuBookIcon />}
          />
          <BottomNavigationAction
            label="Add Book"
            onClick={() => history.push("/addbook")}
            icon={<AddIcon />}
          />
        </BottomNavigation>
      </Hidden>
    </Box>
  );
};

export default Navbar;
