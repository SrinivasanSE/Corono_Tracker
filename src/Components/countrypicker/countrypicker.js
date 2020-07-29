import React from "react";
//import { NativeSelect, FormControl,TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styles from "./countrypicker.module.css";
import { TextField } from "@material-ui/core";

const Countrypicker = ({ handleCountryChange, countries, country }) => {
  return (
    <div className={styles.formControl}>
      <Autocomplete
        value={country}
        onChange={(event, newValue) => {
          handleCountryChange(newValue);
        }}
        options={countries}
        renderInput={(params) => (
          <TextField {...params} label="Select a Country" variant="outlined" />
        )}
      />
    </div>
  );
};

export default Countrypicker;
