import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Game } from "./actions";

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: 4,
  },
}));

const Board: React.FC = () => {
  const classes = useStyles();
  // get scores and display

  return (
    <Grid container className={`${classes.marginTop}`}>
      <Typography variant="h3">HighScoreApp</Typography>
      <Game />
    </Grid>
  );
};

export default Board;
