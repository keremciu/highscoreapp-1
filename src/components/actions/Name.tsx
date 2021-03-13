import React from "react";
import { Grid, makeStyles, InputLabel, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  marginLeft: {
    marginLeft: 10,
  },
}));

interface NameProps {
  value: string;
  onNameChange: (name: string) => void;
}

const Name: React.FC<NameProps> = ({ value, onNameChange }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <form autoComplete="off">
        <Grid container direction="row" justify="center" alignItems="center">
          <InputLabel>Name: </InputLabel>
          <TextField
            margin="dense"
            name="name"
            variant="standard"
            size="medium"
            value={value}
            onChange={(e) => onNameChange(e.target.value)}
            className={classes.marginLeft}
          />
        </Grid>
      </form>
    </Grid>
  );
};

export default Name;
