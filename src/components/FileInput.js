import React from "react";
import { Controller } from "react-hook-form";
import Dropzone from "react-dropzone";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper  } from "@material-ui/core";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import CloudUpload from "@material-ui/icons/CloudUpload";

export const FileInput = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={(onChange, onBlur, value) => {
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper variant="outlined" {...getRootProps()}>
                <CloudUpload />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drop files or click to select.</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, i) => {
              return (
                <ListItem>
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
