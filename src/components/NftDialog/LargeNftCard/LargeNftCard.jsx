import { Button, Typography, Box } from "@mui/material";
import { lazy, Suspense } from "react";
// import Image from "./Image";
import openSeaListing from "../../utils/openSeaListing";

import { LazyLoadImage } from "react-lazy-load-image-component";

const LargeNftCard = ({ imageUrl, name, tokenId, description }) => {
  const LazyImage = lazy(() => import("./LargeImage"));
  const checkAvailability = () => {
    const check = openSeaListing();
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "20rem",
          height: "32rem",
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
        </Box>
        <Box sx={{ margin: "1rem" }}>
          <Typography> {name}</Typography>
          <Typography> {tokenId}</Typography>
          <Typography color={"#B3B5C3"}> {description}</Typography>
        </Box>

        <Button>buy</Button>
      </Box>
    </>
  );
};

export default LargeNftCard;
