import React, { useState } from "react";
import { useData } from "./DataContext";
import { MainContainer } from "./components/MainContainer";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { PrimaryButton } from "./components/PrimaryButton";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Confetti from 'react-confetti';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px'
  },
  table: {
    marginBottom: '30px'
  }
})

export const Result = () => {
  const [success, setSuccess] = useState(false);
  const { data } = useData();
  const styles = useStyles();

  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const { files } = data;

  const onSubmit = async () => {
    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => {
        formData.append("files", file, file.name);
      });
    }

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    const options = {
      method: "POST",
      body: formData,
    };

    const response = await fetch("http://localhost:4000/", options);

    if (response.status === 200) {
      Swal.fire("Success!", "You've completed the challenge.", "success");
      setSuccess(true);
    }
  };

  if (success) {
    return <Confetti />;
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        👩‍💻 Form Values 👩‍💻
      </Typography>
      <TableContainer className={styles.root} component={Paper}>
        <Table className={styles.table}>
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
            {files.map((file, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.size} />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
      <Link to="/">StartOver</Link>
    </MainContainer>
  );
};
