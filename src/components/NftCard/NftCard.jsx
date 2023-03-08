import { Button, Grid, Typography, Box, ImageListItem } from "@mui/material";
import { lazy, Suspense } from "react";
// import Image from "./Image";

import { LazyLoadImage } from "react-lazy-load-image-component";

const NftCard = ({ imageUrl, name }) => {
  const LazyImage = lazy(() => import("./Image"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "10rem",
          height: "16rem",
          boxSizing: "border-box",
          bgcolor: " #E5E7F8",
          boxShadow: " 0px 12px 44px -16px rgba(64, 79, 216, 0.24)",
          borderRadius: "12px",
          "&:hover": {
            boxShadow: " 12px 12px 24px -8px rgba(45, 35, 216, 0.45)",
          },
        }}
      >
        <Box
          sx={{
            borderRadius: "12px",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={imageUrl} />
          </Suspense>
          {/* <img
            src={imageUrl}
            alt="nft image"
            overflow="hidden"
            borderRadius="12px"
          /> */}
          {/* <LazyLoadImage
            src={imageUrl}
            width={"100%"}
            effect="blur"
            borderRadius={"12px"}
            overflow={"hidden"}
          /> */}
        </Box>
        <Typography> {name}</Typography>
        <Button>buy</Button>
      </Box>
    </>
  );
};

export default NftCard;