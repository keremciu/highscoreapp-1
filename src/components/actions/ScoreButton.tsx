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
    const step = getRandomInt();

    onStep(step, newClicks);
  };

  return (
    <>
      {clicks === 10 ? (
        <Button
          variant="contained"
          color="primary"
          onClick={onRestart}
          className={classes.marginLeft}
          data-testid="scoreButton"
        >
          RESTART
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={onButtonClick}
          className={classes.marginLeft}
        >
          PLAY
        </Button>
      )}
    </>
  );
};

export default ScoreButton;
