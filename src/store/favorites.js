import create from 'zustand';
import { persist } from 'zustand/middleware';

const useFavorites = create(persist((set) => ({
  favorites: [],
  addFavorite: (fav) => set((state) => ({ favorites: [...state.favorites, fav] })),
  removeFavorite: (favId) => set((state) => (
    { favorites: state.favorites.filter((favorite) => favorite.id !== favId) }
  )),
  handleFavorite: (fav) => set((state) => {
    if (state.favorites.find((favorite) => favorite.id === fav.id)) {
      state.removeFavorite(fav.id);
    } else {
      state.addFavorite(fav);
    }
  }),
})));
//   {
//   favorites: [],
//   addFavorite: (fav) => set((state) => ({ favorites: [...state.favorites, fav] })),
//   removeFavorite: (favId) => set((state) => (
//     { favorites: state.favorites.filter((favorite) => favorite.id !== favId) }
//   )),
//   handleFavorite: (fav) => set((state) => {
//     if (state.favorites.find((favorite) => favorite.id === fav.id)) {
//       state.removeFavorite(fav.id);
//     } else {
//       state.addFavorite(fav);
//     }
//   }),
// }));

export default useFavorites;
