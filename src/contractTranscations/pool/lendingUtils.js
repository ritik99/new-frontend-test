import { ethers } from "ethers";
import request from 'request';
import {SUBGRAPH_API_URL} from '../../utility/constants'

const poolToken = require("../../abi/artifacts/contracts/Pool/PoolToken.sol/PoolToken.json");
const _interface = new ethers.utils.Interface(poolToken.abi);
const initializeFragement = _interface.getFunction("totalSupply");

export const getTotalSupple = (setMaxAmount) => {
  const totalSupply = _interface.encodeFunctionData(initializeFragement, []);
  setMaxAmount(totalSupply)
}

export const getDataById = (id, setDataById) => {
  const data = JSON.stringify({
    query: `{
      pools(where: {
        id: "${id}"
      }) {
        repaymentInterval
        borrowAsset
        collateralAsset
      }
    }`
  })

  var options = {
    'method': 'POST',
    'url': SUBGRAPH_API_URL,
    'headers': {'Content-Type': 'application/json'},
    'body': data
  }

  request(options, async function (error, response) {
    if (error){
      return null
    } else {
      var body = JSON.parse(response.body)
      if (body.data.pools.length) {
        setDataById(body.data.pools[0])
      }
      return null
    };
  })
}

export const getFormatedTime = (t) => {
  var cd = 24 * 60 * 60 * 1000,
  ch = 60 * 60 * 1000,
  d = Math.floor(t / cd),
  h = Math.floor( (t - d * cd) / ch),
  m = Math.round( (t - d * cd - h * ch) / 60000)
  if( m === 60 ){
    h++;
    m = 0;
  }
  if( h === 24 ){
    d++;
    h = 0;
  }
  return `${d}d ${h}h ${m}m`;
}

export const getDateTime = (date) => {
  return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}
