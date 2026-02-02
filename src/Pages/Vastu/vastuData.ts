export type VastuItem = {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
};

export const vastuData = [
  {
    id: 1,
    title: "Vastu for Home Entrance",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    tags: ["Entrance", "Positive Energy"],
    description:
      "The entrance of a home plays a crucial role in attracting positive energy. Proper placement, lighting, and direction help improve harmony and prosperity.",
  },
  {
  id: 2,
  title: "Vastu for Bedroom",
  image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
  tags: ["Bedroom", "Sleep", "Peace"],
  description:
    "The bedroom should be designed to promote rest and relaxation. Sleeping with your head towards the south or east and avoiding mirrors facing the bed helps maintain peace and improve sleep quality.",
},
{
  id: 3,
  title: "Vastu for Kitchen",
  image: "https://images.unsplash.com/photo-1556912167-f556f1f39df3",
  tags: ["Kitchen", "Health", "Fire"],
  description:
    "The kitchen represents the fire element in Vastu Shastra. Placing it in the southeast direction and keeping it clean ensures good health, balanced energy, and harmony in the household.",
},
{
  id: 4,
  title: "Vastu for Office",
  image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  tags: ["Office", "Growth", "Success"],
  description:
    "An office designed according to Vastu principles enhances productivity and success. Sitting facing north or east and keeping the workspace clutter-free helps attract growth and stability.",
},

];