import web3 from './web3';
import Kyc from './build/Kyc.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Kyc.interface),address);
};
