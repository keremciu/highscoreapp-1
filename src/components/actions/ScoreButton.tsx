import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { getRandomInt } from "../../utils/utils";

const useStyles = makeStyles({
  marginLeft: {
    marginLeft: 20,
  },
});
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
  const classes = useStyles();
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
    <Button
      variant="contained"
      color="primary"
      onClick={onButtonClick}
      className={classes.marginLeft}
    >
      PLAY
    </Button>
  );
};

export default ScoreButton;
