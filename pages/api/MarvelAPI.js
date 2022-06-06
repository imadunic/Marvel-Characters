var api = require("marvel-api");

var marvel = api.createClient({
  publicKey: process.env.MARVEL_PUBLIC_KEY,
  privateKey: process.env.MARVEL_PRIVATE_KEY,
});

export const getAllCharacters = async () => {
  let offset = 0;
  let response = {};
  //let testFlag = 0;

  response = await marvel.characters
    .findAll(100, offset)
    .then((data) => data)
    .fail((err) => null);

  let characters = [...response.data];
  const numOfCharacters = response.meta.total;
  console.log("Number of characters:", numOfCharacters);

  offset += 100;
  while (offset <= numOfCharacters) {
    response = await marvel.characters
      .findAll(100, offset)
      .then((data) => data)
      .fail((err) => null);

    offset += 100;
    console.log(offset);
    if (response && response.data)
      characters = [...characters, ...response.data];
  }

  return characters;
};
