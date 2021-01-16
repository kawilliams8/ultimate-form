import React from "react";
import { MainContainer } from './components/MainContainer';
import Paper from '@material-ui/core/Paper';
import { Typography, Table, TableCell, TableContainer, TableHead, TableRow  } from '@material-ui/core';

export const Result = () => {
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
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </MainContainer>
  );
};
