import React from 'react';
import Controller from 'react-hook-form';
import Dropzone from 'react-dropzone';
import Paper from '@material-ui/core';
import CloudUpload from '@material-ui/icons/CloudUpload';

export const FileInput = ({control, name}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={(onChange, onBlur, value) => {<>
      <DropZone
        onDrop={onChange}
        {({getRootProps, getInputProps}) => (
          <Paper variant={outlined}{...getRootProps()}>
            <CloudUpload/>
            <input {...getInputProps()} name={name} onBlur={onBlur}/>
            <p>Drop files or click to select.</p>
          </Paper>
        )}
      >
      </DropZone>
      </>}}
    />
  )
};
