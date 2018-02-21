const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compileFactory = require("./build/CampaignFactory.json");
const provider = new HDWalletProvider(
  "solar rapid vintage oval vendor evolve replace now exclude endorse grief stem",
  "https://rinkeby.infura.io/nJ4vwAo1AaL8XQT7p7XK"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("deploying from ", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compileFactory.interface)
  )
    .deploy({ data: compileFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("deployed to address ", result.options.address);
};

deploy();
