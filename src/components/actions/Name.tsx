import React from "react";
import {
  Grid,
  makeStyles,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  margin: {
    marginLeft: 10,
    marginTop: 20,
  },
  label: {
    paddingTop: 10.5,
  },
}));

interface NameProps {
  value: string;
  onNameChange: (name: string) => void;
  error: boolean;
}

const Name: React.FC<NameProps> = ({ value, onNameChange, error }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <form autoComplete="off">
        <Grid container direction="row" justify="center" alignItems="center">
          <InputLabel className={classes.label} color="primary">
            <Typography variant="subtitle1" align="center" color="secondary">
              Player:
            </Typography>
          </InputLabel>
          <TextField
            margin="dense"
            name="name"
            variant="outlined"
            size="small"
            value={value}
            onChange={(e) => onNameChange(e.target.value)}
            className={classes.margin}
            error={error}
            helperText={error ? "Name missing" : ""}
          />
        </Grid>
      </form>
    </Grid>
  );
};

export default Name;
