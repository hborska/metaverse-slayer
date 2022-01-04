const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    //Character names
    ["Geralt of Rivia", "Yennefer of Vengerberg", "Ciri"],
    //Images
    [
      "https://www.refinery29.com/images/9060813.jpg",
      "https://cdna.artstation.com/p/assets/images/images/020/016/748/large/veres-gergely-yen-rajz.jpg",
      "https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/83942146_110158733870885_1283229214639652864_n.jpg",
    ],
    //HP
    [200, 300, 150],
    //Attack damage
    [150, 75, 125]
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  console.log("Done deploying and minting default characters!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
