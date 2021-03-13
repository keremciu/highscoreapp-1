import React from "react";
import { Grid, Button } from "@material-ui/core";
import { getRandomInt } from "../../utils/utils";

interface ScoreButtonProps {
  clicks: number;
  onStep: (step: number, clicks: number) => void;
  onRestart: () => void;
}

const ScoreButton: React.FC<ScoreButtonProps> = ({
  clicks,
  onStep,
  onRestart,
}) => {
  const onButtonClick = () => {
    const newClicks = clicks + 1;
    if (newClicks <= 10) {
      const step = getRandomInt();
      onStep(step, newClicks);
    } else {
      onRestart();
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Button variant="contained" color="primary" onClick={onButtonClick}>
        PLAY!
      </Button>
    </Grid>
  );
};

export default ScoreButton;
