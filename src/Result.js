import React from "react";
import { useData } from './DataContext';
import { MainContainer } from './components/MainContainer';
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from '@material-ui/core';
import { PrimaryButton } from "./components/PrimaryButton";
import { Link } from 'react-router-dom';

export const Result = () => {
  const { data } = useData();

  const entries = Object.entries(data).filter(entry => entry[0] !== 'files');
  console.log(entries)
  const { files } = data;

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
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell>{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h5">
            🗄️ Files 🗄️
          </Typography>
          <List>
            { files.map((file, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.size}/>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
      <Link to='/'>StartOver</Link>
    </MainContainer>
  );
};
