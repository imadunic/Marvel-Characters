export const listFavorites = (characters) => {
  // Function returns all of the user's favorites

  let favorites = localStorage.getItem("favorites");
  if (!favorites) return [];

  favorites = JSON.parse(favorites);

  return characters.filter((character) => favorites.indexOf(character.id) >= 0);
};
