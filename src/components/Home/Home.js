import React, { useEffect, useRef } from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";

import Details from "../Details/Details";
import useStyles from "../../styles";
import Main from "../Main/Main";

const Home = () => {
  const classes = useStyles();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();


  return (
    <div>
      <AppBar position="static">
      <Toolbar className={classes.toolbar}>
            <Button className={classes.navButton} href="/bot">Chatbot</Button>
            <Button className={classes.navButton} href="/ocr">OCR</Button>
        </Toolbar>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>Expense Tracker</h1>
      </AppBar>
      <Grid
        container
        spacing={7}
        alignItems="center"
        justify="center"
        style={{ minHeight: "60vh", marginTop: "40px" }}
      >
        <Grid item xs={8} sm={3} className={`${classes.details} ${classes.mobile}`}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={8} sm={2}>
          <Main />
        </Grid>
        <Grid item xs={8} sm={3} className={`${classes.details} ${classes.desktop}`}>
          <Details title="Expense" />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={7}
        alignItems="center"
        justify="center"
        style={{ minHeight: "50vh" }}
      >
      </Grid>
    </div>
  );
};

export default Home;
