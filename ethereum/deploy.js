const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/KycFactory.json');

const provider = new HDWalletProvider(
  'ticket fiscal shiver slush glimpse now obtain ranch robot laptop buzz day',
  'https://rinkeby.infura.io/v3/a3405fc5db38447f8acf4c5ca6d20158'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data:'0x'+ compiledFactory.bytecode })
    .send({ gas: '3000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
