export const queryCharacters = (query, characters) => {
  return characters.filter((character) => {
    if (query == "") {
      //if query is empty
      return character;
    } else if (character.name.toLowerCase().includes(query.toLowerCase())) {
      //returns filtered array
      return character;
    }
  });
};
