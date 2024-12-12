interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
  startDate: string;
  endDate: string;
  state: string;
  photoLinks: string[];
  country: string;
  city: string;
  rating: number;
}


export type SortCriteria =
  | "rating_desc"
  | "rating_asc"
  | "price_desc"
  | "price_asc";

export const sortTours = (tours: Tour[], criteria: SortCriteria): Tour[] => {
  return [...tours].sort((a, b) => {
    switch (criteria) {
      case "rating_desc":
        return b.rating - a.rating;
      case "rating_asc":
        return a.rating - b.rating;
      case "price_desc":
        return  b.price - a.price; // Цена по убыванию
      case "price_asc":
        return a.price - b.price;// Цена по возрастанию
      default:
        return 0;
    }
  });
};
