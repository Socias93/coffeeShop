export type Category = { id: string; name: string };

const categories: Category[] = [
  { id: "espresso", name: "Espresso" },
  { id: "milk", name: "Milk Based" },
  { id: "cold", name: "Cold" },
  { id: "specialty", name: "Specialty" },
];

export function getCategories(): Category[] {
  return categories;
}
