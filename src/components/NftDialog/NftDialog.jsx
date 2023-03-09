import { Dialog } from "@mui/material";
import React, { useState } from "react";
import LargeNftCard from "./LargeNftCard";

const NftDialog = ({ handleClose, open, meta }) => {
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <LargeNftCard {...meta} />
      </Dialog>
    </>
  );
};

export default NftDialog;
