// moralis API KEY - lY40yW8MFfivwmKVsdFPpzIfoevCaHV7F6m9sxiFtAwfT3dRgKxgrZTqVHW1fsCv
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const getNFTS = async () => {
  await Moralis.start({
    apiKey: "YlY40yW8MFfivwmKVsdFPpzIfoevCaHV7F6m9sxiFtAwfT3dRgKxgrZTqVHW1fsCv",
    // ...and any other configuration
  });

  const address = "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getContractNFTs({
    address,
    chain,
  });

  console.log(response.toJSON());
};

export default getNFTS;
