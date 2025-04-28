/**
 * How frogmixer works  ?
 * 
 * 1. Generate major keypair
 * 2. Generate metadata
 * 3. Generate .frog file for owner ship 
 * 4. Work as metadata works
 *    1. Generate money reciver from major keypair
 *    2. Waiting for money recive to reciver address
 *    3. When money recived . splited money into different size : 50$ / 100$  / 200$ / 10$
 *    4. Generate XMR keypair base on major keypair. Keypair A , Keypair B
 *    5. Bridge it into XMR keypair A via FF.IO
 *    6. Send XMR from A to B
 *    7. Waiting to the withdraw actions
 * 5. the .frog file owner can claim the money into any chain 
 * 6. When claim ownership . Bridge XMR to any asserts from XMR B into your target chain / account .
 **/
import * as nacl from "tweetnacl"
import bs58 from "bs58"

export class mixer {
  keypair: any;
  config:any;

  constructor(config = {}) {
    this.config = config;
  }
}