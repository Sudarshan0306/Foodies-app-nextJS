'use client';
  
import React, { useRef } from "react";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const fileRef = useRef();
  const handlePickClick = () => {
    fileRef.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}></label>
      <div className={classes.controls}>
        <input
          type="file"
          name={name}
          id={name}
          className={classes.input}
          accept="image/png, image/jpeg"
          ref={fileRef}
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
