import sha256 from "crypto-js//sha256.js";

// var SHA256 = require("crypto-js/sha256");
const dataObject = {
  id: 1,
  body: "With Object Works too",
  time: new Date().getTime().toString().slice(0, -3),
};

const data1 = "Blockchain Rock!";

function generateHash(data, dataObject) {
  const dataObject1 = sha256(JSON.stringify(dataObject));
  const data1 = sha256(JSON.stringify(data));
  console.log("Hash1 " + data1);
  console.log("Hash2 " + dataObject1);
}
// const hashDigest = sha256(JSON.stringify(dataObject));
// console.log("hash1 " + sha256(data1));
// console.log("hash2 " + hashDigest);

console.log(generateHash(data1, dataObject));

// console.log(SHA256(hashDigest));
