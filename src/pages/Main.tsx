import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Container, Typography } from "@material-ui/core";
import { Game } from "../components/actions";
import { Board } from "../components/displayBoard";
import { GameData } from "../utils/types";

const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
  },
}));

const getScores = async (): Promise<GameData[]> => {
  const res = await fetch(`/highscoreapp/score`);
  const json = await res.json();
  return json;
};

const Main: React.FC = () => {
  const classes = useStyles();
  const [scores, setScores] = useState<GameData[]>([]);

  const updateScores = async () => {
    getScores().then((result) => {
      setScores(result);
    });
  };

  useEffect(() => {
    updateScores();
  }, []);

  const onSaved = () => {
    updateScores();
  };

  const checkBoard = (newScore: GameData) => {
    const newScores = scores.filter((data) => data.id);
    setScores([...newScores, newScore]);
  };

  return (
    <Container className={classes.container}>
      <Grid container direction="column" justify="center" alignContent="center">
        <Typography
          variant="h3"
          align="center"
          className={classes.title}
          color="primary"
        >
          High Score App
        </Typography>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignContent="center"
        >
          <Game onSaved={onSaved} checkBoard={checkBoard} />
          <Board scores={scores} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
