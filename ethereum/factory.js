import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  "0x1235572c12B639E681904ff03Ea88050BF95852A"
);

export default instance;
