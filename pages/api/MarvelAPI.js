var api = require("marvel-api");

var marvel = api.createClient({
  publicKey: process.env.MARVEL_PUBLIC_KEY,
  privateKey: process.env.MARVEL_PRIVATE_KEY,
});

export const getAllCharacters = async () => {
  const response = await marvel.characters
    .findNameStartsWith("Qu")
    .then((data) => data)
    .fail((err) => null);

  if (response == null) return [];

  return response.data;
};
