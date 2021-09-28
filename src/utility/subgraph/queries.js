import { query } from "./utils";
import {ethers} from 'ethers'

export async function twitterDetails(address) {
    const queryString = `{
        twitterDetails(where:{id:"${address}"}) {
          id
              twitterId
        }
      }          
      `;
    const respData = await query(queryString)
    const twitterDetails = respData.data.twitterDetails;
    
    if(twitterDetails.length == 0) {
        return;
    }

    const bytes32TwitterDetails = ethers.utils.formatBytes32String(respData.data.twitterDetails[0]);
    
    return ethers.utils.parseBytes32String(bytes32TwitterDetails);
}