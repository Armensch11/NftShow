import { TextField, Box } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, IconButton } from "@mui/material";
import { useStore } from "effector-react";
import { $searchTerm, setSearch } from "../../store/search";
const SearchBar = () => {
  const searchTerm = useStore($searchTerm);
  // const [searchTerm, setSearchTerm] = useState(null);
  return (
    <>
      <Box width={"100%"} textAlign={"center"}>
        <TextField
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search NFTs by Contract"
          sx={{ width: "50vw", margin: "1rem" }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
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
