import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  Paper,
  Snackbar,
} from "@material-ui/core";
import { Name, ScoreButton } from ".";
import { GameData, FormErrors } from "../../utils/types";

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
  snackBar: {
    backgroundColor: "#4000d0",
    color: "white",
    padding: 20,
    borderRadius: 5,
  },
});

interface GameValues {
  totalPoints: number;
  clicks: number;
}

interface GameProps {
  onSaved: () => void;
  checkBoard: (values: GameData) => void;
}

const Game: React.FC<GameProps> = ({ onSaved, checkBoard }) => {
  const classes = useStyles();
  const initialValues = {
    totalPoints: 0,
    clicks: 0,
  };
  const [gameValues, setGameValues] = useState<GameValues>(initialValues);
  const [name, setName] = useState("");
  const [openMessage, setOpenMessage] = useState(false);
  const [showErrors, setShowErrors] = useState<FormErrors | undefined>(
    undefined
  );
  useEffect(() => {
    if (gameValues.clicks === 10) {
      setOpenMessage(true);
    }
  }, [gameValues.clicks]);

  const onStep = (step: number, clicks: number) => {
    const newValues = { clicks, totalPoints: gameValues.totalPoints + step };
    setGameValues(newValues);
    if (!name) {
      setShowErrors(FormErrors.Name);
    } else {
      checkBoard({ ...newValues, name });
    }
  };

  const onNameChange = (newName: string) => {
    setName(newName);
    setShowErrors(undefined);
  };

  const onRestart = () => {
    setGameValues({ ...initialValues });
  };

  const onSubmit = async () => {
    const submitForm = { ...gameValues, name };

    if (!submitForm.name) {
      setShowErrors(FormErrors.Name);
    } else {
      await fetch(`/highscoreapp/score`, {
        method: "POST",
        body: JSON.stringify(submitForm),
      });
      onSaved();
      setGameValues({ ...initialValues });
    }
  };

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      item
      xs={12}
      sm={6}
    >
      <Name
        value={name}
        onNameChange={onNameChange}
        error={showErrors === FormErrors.Name}
      />
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
      <Grid container justify="flex-end" className={classes.marginTop}>
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={openMessage}
        autoHideDuration={3000}
        onClose={() => setOpenMessage(false)}
      >
        <Typography className={`${classes.snackBar}`}>
          No more clicks to go!
        </Typography>
      </Snackbar>
    </Grid>
  );
};

export default Game;
