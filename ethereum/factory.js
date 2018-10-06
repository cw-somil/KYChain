import web3 from './web3';
import KycFactory from './build/KycFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(KycFactory.interface),
  '0x92441a09568D607394133fFDb3Ad940473D0CdaF'
);

export default instance;
