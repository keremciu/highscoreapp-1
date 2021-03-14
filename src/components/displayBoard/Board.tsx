import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import { GameData } from "../../utils/types";
import { Grid } from "@material-ui/core";
import { getAverage } from "../../utils/utils";

const useStyles = makeStyles({
  table: {
    maxWidth: 450,
  },
});

interface BoardProps {
  scores: GameData[];
}

const Board: React.FC<BoardProps> = ({ scores }) => {
  const classes = useStyles();

  const top10 = [...scores]
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .slice(0, 10)
    .map((game) => ({
      ...game,
      average: getAverage(game.totalPoints, game.clicks),
    }));

  return (
    <Grid container item xs={12} sm={6} justify="flex-end" alignItems="center">
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Clicks</TableCell>
              <TableCell align="right">Average per click</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {top10.map((row) => (
              <TableRow key={`${row.name}${row.id}`}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.totalPoints}</TableCell>
                <TableCell align="right">{row.clicks}</TableCell>
                <TableCell align="right">{row.average}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Board;
