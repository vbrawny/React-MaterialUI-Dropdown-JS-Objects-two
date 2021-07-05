import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 100
  }
}));

export default function App() {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello from Victor</h1>
      <FormControl className={classes.formControl}>
        <InputLabel>Numbers</InputLabel>
        <Select onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={40}>Fourty</MenuItem>
        </Select>
      </FormControl>
      <p>You Selected: {value}</p>
    </div>
  );
}
