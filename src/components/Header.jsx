import React, { useCallback, useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "../styles/styles";
/* Material UI imports */
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import { getImages } from "../redux/actions";
import debounce from "lodash.debounce";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    updateSuggestions();
  }, []);

  useEffect(() => {
    console.log("Header");
  });

  const updateSuggestions = () => {
    const data = JSON.parse(localStorage.getItem("suggestions"))
      .slice(-5)
      .reverse();
    setLocalData(data);
  };

  const searchEvent = useCallback(
    (text) => {
      console.log("text: ", text);
      dispatch(getImages({ searchText: text }));
      let storageData = localStorage.getItem("suggestions");
      if (storageData) {
        storageData = JSON.parse(storageData);
      } else {
        storageData = [];
      }
      if (text && storageData.indexOf(text) === -1) {
        storageData.push(text);
        localStorage.setItem("suggestions", JSON.stringify(storageData));
      }
      updateSuggestions();
    },
    [dispatch]
  );

  const handleChange = useCallback(debounce(searchEvent, 700), []);

  const cleanLocalStorage = () => {
    localStorage.setItem("suggestions", JSON.stringify([]));
    updateSuggestions();
  };

  return (
    <div className={classes.headerContainer}>
      <Typography className={classes.headerText}>Search Photos</Typography>
      <Paper component="form" className={classes.root}>
        <Autocomplete
          freeSolo
          className={classes.input}
          placeholder="Type to search..."
          options={localData}
          onChange={(event, newValue) => {
            handleChange(newValue);
          }}
          onInputChange={(event, newValue) => {
            handleChange(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              style={{ margin: 0 }}
              placeholder="Type to search..."
              margin="normal"
              variant="outlined"
            />
          )}
        />

        {localData.length ? (
          <>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              disableFocusRipple
              className={classes.iconButton}
              aria-label="delete suggestions"
              onClick={cleanLocalStorage}
            >
              <DeleteForeverIcon />
            </IconButton>
          </>
        ) : null}
      </Paper>
    </div>
  );
};

export default memo(Header);
