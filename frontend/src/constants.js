export const CONTRACT_ADDRESS = "0x587B4Ef19881B9b47F0d37800075Fc2725dffBB0";

export const transformCharacterData = (characterData) => {
  //for formatting character data in state
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};
