export const CONTRACT_ADDRESS = "0xA9dc46d5aCCb154a89C750D0F003D8aF552Ba2De";

export const transformCharacterData = (characterData) => {
  //for formatting character data in state
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};
