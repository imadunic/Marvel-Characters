import { PAGE_SIZE } from "../constants";

export const selectCharactersToShow = (offset, characters) => {
  let i = 0;
  let shownCharacterList = [];
  while (i < PAGE_SIZE && i + offset < characters.length) {
    shownCharacterList.push(characters[i + offset]);
    i++;
  }

  return shownCharacterList;
};
