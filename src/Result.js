import React from "react";
import { MainContainer } from './components/MainContainer';
import Paper from '@material-ui/core/Paper';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from '@material-ui/core';

export const Result = () => {
  const data = useDate();

  const entries = Object.entries(data).filter(entry => entry[0] !== 'files');
  const files = {data};

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        👩‍💻 Form Values 👩‍💻
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map(entry => (
              <TableRow key={entry[0]}>
                <TableCell>
                  {entry[0]}
                </TableCell>
                <TableCell>
                  {entry[1].toString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainContainer>
  );
};
