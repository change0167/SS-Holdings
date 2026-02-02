export type BlogItem = {
  id: number;
  title: string;
  image: string;
  content: string;
};

export const blogsData: BlogItem[] = [
  {
    id: 1,
    title: "How To Optimize Progressive Web Apps",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png",
    content:
      "Progressive Web Apps combine the best of web and mobile applications. They provide fast loading times, offline support, and a native-like experience. By optimizing assets, using service workers, and ensuring responsive design, you can significantly improve user engagement and performance.",
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    content:
      "Scalable React applications require a clean architecture and reusable components. Separating business logic from UI, following consistent folder structures, and managing state efficiently are key practices for long-term scalability.",
  },
  {
    id: 3,
    title: "Modern CSS Techniques for Responsive Design",
    image:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    content:
      "Modern CSS provides powerful tools like Flexbox, Grid, and media queries to create responsive layouts. Avoid fixed widths, embrace fluid designs, and test across devices to ensure a seamless user experience.",
  },
];
