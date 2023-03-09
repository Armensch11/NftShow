import axios from "axios";
const openSeaListing = async (contract, tokenId) => {
  const options = {
    method: "GET",
    url: "https://api.opensea.io/v2/orders/ethereum/seaport/listings",
    params: {
      asset_contract_address: { contract },
      token_id: { tokenId },
    },
    headers: { accept: "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
export default openSeaListing;
