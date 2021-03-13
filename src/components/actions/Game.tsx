import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Name, ScoreButton } from ".";

interface GameValues {
  totalPoints: number;
  clicks: number;
}
const Game: React.FC = () => {
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
      body: JSON.stringify(gameValues),
    });

    setGameValues({ ...initialValues });
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Name value={name} onNameChange={onNameChange} />
      <Typography variant="h3">Clicks: {gameValues.clicks}</Typography>
      <Typography variant="h3">Score: {gameValues.totalPoints}</Typography>
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
      >
        Submit!
      </Button>
    </Grid>
  );
};

export default Game;
