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
  //Minting our initial 3 characters
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  //Getting the token URI of the first NFT for testing
  let returnedTokenUri = await gameContract.tokenURI(3);
  console.log("Token URI:", returnedTokenUri);
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
