import React from "react";
import { Controller } from "react-hook-form";
import Dropzone from "react-dropzone";
import { List, ListItem, ListItemIcon, ListItemText, Paper  } from "@material-ui/core";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import CloudUpload from "@material-ui/icons/CloudUpload";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#eee',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#333',
    padding: '10px',
    marginTop: '20px'
  },
  icon: {
    marginTop: '16px',
    color: '#888',
    fontSize: '42px'
  }
})

export const FileInput = ({ control, name }) => {
  const styles = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={(onChange, onBlur, value) => {
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                <CloudUpload className={styles.icon}/>
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drop files or click to select.</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.size} />
                </ListItem>
              );
            })}
          </List>
        </>;
      }}
    />
  );
};
