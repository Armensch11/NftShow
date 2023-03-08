import { TextField, Box } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, IconButton } from "@mui/material";

const SearchBar = ({ onSearchHandler }) => {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <>
      <Box width={"100%"} textAlign={"center"}>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search NFTs by Contract"
          sx={{ width: "50vw", margin: "1rem" }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => onSearchHandler(searchTerm)}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Box>
    </>
  );
};

export default SearchBar;
