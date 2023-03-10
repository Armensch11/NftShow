import React, { useState, useEffect, Suspense } from "react";
import getNfts from "../utils/getNfts";
import NftCard from "../NftCard";
import { Box } from "@mui/material";
import SearchBar from "../SearchBar";
import { useStore } from "effector-react";
import { $searchTerm } from "../../store/search";

const ShowNFTs = (props) => {
  const searchTerm = useStore($searchTerm);
  const [nfts, setNfts] = useState({});
  // const handleSearch = (term) => {
  //   setSearchTerm(term);
  // };
  const getList = async () => {
    const temp = await getNfts(searchTerm);
    setNfts(temp);
  };

  useEffect(() => {
    getList();
  }, [searchTerm]);
  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          mt: "1.5rem",
          mb: "1.5rem",
        }}
      >
        <SearchBar />
        {nfts.length &&
          nfts
            .filter((el, index) => index < 27)
            .map((nft) => <NftCard key={nft.id} {...nft} />)}
      </Box>
    </>
  );
};

export default ShowNFTs;
