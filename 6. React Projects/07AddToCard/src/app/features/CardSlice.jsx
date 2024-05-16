import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      href: "#",
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
      href: "#",
    },
  ],
};

const CardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addTocard: (state, action) => {},
    removeCard: (state, action) => {},
  },
});

export const { addTocard, removeCard } = CardSlice.actions;
export default CardSlice.reducer;
