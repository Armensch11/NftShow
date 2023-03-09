import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "Awa4zVW_Qho64mxHJtt_2Zf_KEiXhnl7",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);
// const address = "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D";

const getNfts = async (
  address = "0x60e4d786628fea6478f785a6d7e704777c86a7c6"
) => {
  // Get all NFTs

  const opts = {
    omitMetadata: false,
    startToken: "0x65",
    limit: 50,
    // pageSize: 50,
    // tokenUriTimeoutInMs: 0,
  };
  const temp = await alchemy.nft.getNftsForContract(address, opts);
  console.log(temp);
  // for await (const nft of alchemy.nft.getNftsForContractIterator(
  //   address,
  //   opts
  // )) {
  //   temp.push(nft);

  const ipfsToHtml = (str) => str.replace("ipfs:/", "https://ipfs.io/ipfs");
  const dataToUse = temp.nfts.map((data) => ({
    name: data.rawMetadata.name,
    imageUrl: ipfsToHtml(data.rawMetadata.image),
    id: data.tokenId,
    description: data.description
  }));
  return dataToUse;
  // Get all NFTs
  // const { nfts } = await alchemy.nft.getNftsForContract(address, {
  //   startToken: "800",
  // });

  // let i = 1;
  // //console.log(nfts);

  // for (let nft of nfts) {
  //   console.log(`${i}. ${nft.rawMetadata.image}`);
  //   i++;
  // }
  // return nfts;
};

export default getNfts;
