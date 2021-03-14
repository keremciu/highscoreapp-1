import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { GameData } from "../../utils/types";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxWidth: 450,
  },
});

function getAverage(totalPoints: number, clicks: number) {
  return Math.round(totalPoints / clicks);
}

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
    <Grid container xs={12} sm={6} justify="flex-end" alignItems="center">
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
              <TableRow key={row.name}>
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
