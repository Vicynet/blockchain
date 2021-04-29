import sha256 from "crypto-js//sha256.js";

export default class Block {
  // Class with a constructor for block
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  generateHash() {
    let self = this; // creating a temporary reference of the class object
    var hashObject = sha256(JSON.stringify(self));
    self.hash = hashObject;
    return new Promise((resolve, reject) => {
      if (self.hash != "") {
        resolve(self);
      } else {
        reject(console.log("No hash created"));
      }
    });
  }
}
