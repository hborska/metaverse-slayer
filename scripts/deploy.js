const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    //Character names
    ["Geralt of Rivia", "Yennefer of Vengerberg", "Fringilla Vigo"],
    //Images
    [
      "https://www.refinery29.com/images/9060813.jpg",
      "https://cdna.artstation.com/p/assets/images/images/020/016/748/large/veres-gergely-yen-rajz.jpg",
      "https://static.wikia.nocookie.net/witcher/images/5/52/Netflix_witcher_s2_fringilla.png",
    ],
    [200, 300, 150], //HP
    [150, 75, 125], //Attack damage
    "Leshy: Forest Monster", //Boss name
    "https://staticdelivery.nexusmods.com/images/952/18399694-1548863826.png", //Boss pic
    1000, //Boss HP
    50 //Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
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
