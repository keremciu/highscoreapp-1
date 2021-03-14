import React, { useState } from "react";
import { Grid, Typography, Button, makeStyles, Paper } from "@material-ui/core";
import { Name, ScoreButton } from ".";

const useStyles = makeStyles({
  scores: {
    height: 200,
  },
  marginTop: {
    marginTop: 20,
  },
  marginLeft: {
    marginLeft: 20,
  },
  buttons: {},
});

interface GameValues {
  totalPoints: number;
  clicks: number;
}

interface GameProps {
  onSaved: () => void;
}
const Game: React.FC<GameProps> = ({ onSaved }) => {
  const classes = useStyles();
  const initialValues = {
    totalPoints: 0,
    clicks: 0,
  };
  const [gameValues, setGameValues] = useState<GameValues>(initialValues);
  const [name, setName] = useState("");

  const onStep = (step: number, clicks: number) => {
    setGameValues({ clicks, totalPoints: gameValues.totalPoints + step });
  };

  const onNameChange = (newName: string) => {
    setName(newName);
  };

  const onRestart = () => {
    setGameValues({ ...initialValues });
  };

  const onSubmit = async () => {
    await fetch(`/highscoreapp/score`, {
      method: "POST",
      body: JSON.stringify({ ...gameValues, name }),
    });
    onSaved();
    setGameValues({ ...initialValues });
  };

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      xs={12}
      sm={6}
    >
      <Name value={name} onNameChange={onNameChange} />
      <Grid
        container
        justify="space-around"
        alignContent="center"
        component={Paper}
        className={`${classes.scores} ${classes.marginTop}`}
      >
        <Typography variant="h3">Clicks: {gameValues.clicks}</Typography>
        <Typography variant="h3">Score: {gameValues.totalPoints}</Typography>
      </Grid>
      <Grid
        container
        justify="flex-end"
        className={`${classes.buttons} ${classes.marginTop}`}
      >
        <ScoreButton
          clicks={gameValues.clicks}
          onStep={onStep}
          onRestart={onRestart}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={onSubmit}
          className={`${classes.marginLeft}`}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Game;
