import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  "0xDcddf16e7D477f4b6a185Db4b21C55A368924187"
);

export default instance;
