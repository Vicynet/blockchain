import BlockClass from "./block.js";

const block = new BlockClass("Test Block 1");

// Generating the block hash
block
  .generateHash()
  .then((result) => {
    console.log(`Block Hash: ${result.hash}`);
    console.log(`Block: ${JSON.stringify(result)}`);
  })
  .catch((error) => {
    console.log(error);
  });
