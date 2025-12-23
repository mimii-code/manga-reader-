export interface Manga {
  id: number;
  title: string;
  author: string;
  cover: string;
  genre: string[];
  rating: number;
  chapters: number;
  status: 'ongoing' | 'completed';
  description: string;
  isNew?: boolean;
  isUpdated?: boolean;
  freeChapters?: number;
}

export interface News {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export const featuredManga: Manga[] = [
  {
    id: 1,
    title: "Perfect Wife's Perfect Revenge",
    author: "Hitomi Nishiki",
    cover: "https://picsum.photos/seed/manga1/300/400",
    genre: ["Romance", "Drama"],
    rating: 4.8,
    chapters: 45,
    status: "ongoing",
    description: "A story of revenge and redemption in the world of high society.",
    isUpdated: true,
  },
  {
    id: 2,
    title: "Sorry About My Brothers",
    author: "Akira Ozaki",
    cover: "https://picsum.photos/seed/manga2/300/400",
    genre: ["Comedy", "Slice of Life"],
    rating: 4.6,
    chapters: 62,
    status: "ongoing",
    description: "A hilarious tale of family chaos and sibling rivalry.",
    isUpdated: true,
    freeChapters: 62,
  },
  {
    id: 3,
    title: "Love Tint Lips",
    author: "Nana Kusunoki",
    cover: "https://picsum.photos/seed/manga3/300/400",
    genre: ["Romance", "School Life"],
    rating: 4.5,
    chapters: 38,
    status: "ongoing",
    description: "A sweet romance that blooms in the makeup club.",
  },
  {
    id: 4,
    title: "My First Big Brother",
    author: "Yuko Kasumi",
    cover: "https://picsum.photos/seed/manga4/300/400",
    genre: ["Family", "Drama"],
    rating: 4.7,
    chapters: 28,
    status: "ongoing",
    description: "Discovering the meaning of family through unexpected bonds.",
  },
  {
    id: 5,
    title: "The Prince Was Swapped",
    author: "Kairi Shimotsuki",
    cover: "https://picsum.photos/seed/manga5/300/400",
    genre: ["Fantasy", "Romance"],
    rating: 4.4,
    chapters: 55,
    status: "ongoing",
    description: "A fantasy tale of switched identities and forbidden love.",
    freeChapters: 5,
  },
  {
    id: 6,
    title: "Bandage Play",
    author: "Aona Yamagata",
    cover: "https://picsum.photos/seed/manga6/300/400",
    genre: ["Drama", "Mystery"],
    rating: 4.3,
    chapters: 42,
    status: "ongoing",
    description: "Unraveling secrets hidden beneath the surface.",
  },
  {
    id: 7,
    title: "Brighter Than the Sun",
    author: "Kazune Kawahara",
    cover: "https://picsum.photos/seed/manga7/300/400",
    genre: ["Romance", "Sports"],
    rating: 4.9,
    chapters: 67,
    status: "ongoing",
    description: "A star athlete finds love in unexpected places.",
    isUpdated: true,
  },
  {
    id: 8,
    title: "If I Must Cry, Let It Be for Love",
    author: "Aki Kusaka",
    cover: "https://picsum.photos/seed/manga8/300/400",
    genre: ["Romance", "Drama"],
    rating: 4.6,
    chapters: 33,
    status: "ongoing",
    description: "A touching story about finding love after heartbreak.",
  },
  {
    id: 9,
    title: "My Neighbor Nijika",
    author: "Mizuka Yuzuhara",
    cover: "https://picsum.photos/seed/manga9/300/400",
    genre: ["Comedy", "Romance"],
    rating: 4.5,
    chapters: 29,
    status: "ongoing",
    description: "The girl next door isn't quite what she seems.",
  },
  {
    id: 10,
    title: "Neglected Son-in-Law Life",
    author: "Yua Housho",
    cover: "https://picsum.photos/seed/manga10/300/400",
    genre: ["Romance", "Comedy"],
    rating: 4.4,
    chapters: 48,
    status: "ongoing",
    description: "From neglected to beloved - an unexpected romance route.",
  },
  {
    id: 11,
    title: "Ashigirl EDO",
    author: "Kozueko Morimoto",
    cover: "https://picsum.photos/seed/manga11/300/400",
    genre: ["Historical", "Romance"],
    rating: 4.8,
    chapters: 72,
    status: "ongoing",
    description: "A time-traveling adventure in Edo period Japan.",
  },
];

export const latestReleases: Manga[] = [
  {
    id: 12,
    title: "Fangirl Life in Bed Vol. 5",
    author: "Various",
    cover: "https://picsum.photos/seed/manga12/300/400",
    genre: ["Romance"],
    rating: 4.3,
    chapters: 5,
    status: "completed",
    description: "The latest volume of this popular series.",
    isNew: true,
  },
  {
    id: 13,
    title: "Handsome Manager Vol. 12",
    author: "Various",
    cover: "https://picsum.photos/seed/manga13/300/400",
    genre: ["Romance", "Comedy"],
    rating: 4.5,
    chapters: 12,
    status: "ongoing",
    description: "Office romance at its finest.",
    isNew: true,
  },
  {
    id: 14,
    title: "Intertwined Gazes Vol. 4",
    author: "Various",
    cover: "https://picsum.photos/seed/manga14/300/400",
    genre: ["Romance"],
    rating: 4.4,
    chapters: 4,
    status: "ongoing",
    description: "When eyes meet, hearts follow.",
    isNew: true,
  },
  {
    id: 15,
    title: "The Flower Weaving Saint Vol. 5",
    author: "Various",
    cover: "https://picsum.photos/seed/manga15/300/400",
    genre: ["Fantasy", "Romance"],
    rating: 4.6,
    chapters: 5,
    status: "ongoing",
    description: "A saint's journey through love and magic.",
    isNew: true,
  },
  {
    id: 16,
    title: "The Prince's Swap Vol. 11",
    author: "Various",
    cover: "https://picsum.photos/seed/manga16/300/400",
    genre: ["Fantasy"],
    rating: 4.5,
    chapters: 11,
    status: "ongoing",
    description: "Continuing the tale of switched royalty.",
    isNew: true,
  },
  {
    id: 17,
    title: "Doting After Revenge Vol. 9",
    author: "Various",
    cover: "https://picsum.photos/seed/manga17/300/400",
    genre: ["Romance", "Drama"],
    rating: 4.7,
    chapters: 9,
    status: "ongoing",
    description: "Love blooms after the storm.",
    isNew: true,
  },
];

export const magazines = [
  { id: 1, name: "Ribon", logo: "https://picsum.photos/seed/ribon/150/60" },
  { id: 2, name: "Margaret", logo: "https://picsum.photos/seed/margaret/150/60" },
  { id: 3, name: "Bessatsu Margaret", logo: "https://picsum.photos/seed/bessatsu/150/60" },
  { id: 4, name: "Cocohana", logo: "https://picsum.photos/seed/cocohana/150/60" },
  { id: 5, name: "Cookie", logo: "https://picsum.photos/seed/cookie/150/60" },
  { id: 6, name: "Dejima", logo: "https://picsum.photos/seed/dejima/150/60" },
  { id: 7, name: "Manga Mee", logo: "https://picsum.photos/seed/mangamee/150/60" },
  { id: 8, name: "Kimi Koi", logo: "https://picsum.photos/seed/kimikoi/150/60" },
];

export const news: News[] = [
  {
    id: 1,
    title: "Red Riding Hood Chacha Accessory Collection Now Available!",
    date: "2025.12.11",
    image: "https://picsum.photos/seed/news1/400/200",
    excerpt: "The beloved series gets a new merchandise line featuring iconic accessories.",
  },
  {
    id: 2,
    title: "Bessatsu Margaret January Issue Now on Sale!",
    date: "2025.12.10",
    image: "https://picsum.photos/seed/news2/400/200",
    excerpt: "Don't miss the latest chapter of your favorite series.",
  },
  {
    id: 3,
    title: "HIGH SCORE, Animal Yokocho, and Choco Mimi Apparel Collection Announced!",
    date: "2025.12.05",
    image: "https://picsum.photos/seed/news3/400/200",
    excerpt: "Three popular series collaborate on a new fashion line.",
  },
  {
    id: 4,
    title: "My First Love Vanished Pop-up Shop Now Open!",
    date: "2025.12.04",
    image: "https://picsum.photos/seed/news4/400/200",
    excerpt: "Visit the exclusive pop-up shop featuring limited edition merchandise.",
  },
  {
    id: 5,
    title: "Margaret Issue 1 Now Available!",
    date: "2025.12.03",
    image: "https://picsum.photos/seed/news5/400/200",
    excerpt: "Start the new year with exciting new stories.",
  },
  {
    id: 6,
    title: "Ribon January Special Issue Now on Sale!",
    date: "2025.12.03",
    image: "https://picsum.photos/seed/news6/400/200",
    excerpt: "Extra content and special features in this month's issue.",
  },
  {
    id: 7,
    title: "Dream-Colored Patissiere Cookie Tin Collaboration!",
    date: "2025.11.28",
    image: "https://picsum.photos/seed/news7/400/200",
    excerpt: "Delicious cookies in a collectible tin featuring your favorite characters.",
  },
];

export const bannerSlides = [
  {
    id: 1,
    title: "TV Anime Adaptation Announced!",
    subtitle: "Sorry About My Brothers",
    image: "https://picsum.photos/seed/banner1/1200/400",
    link: "/series/2",
  },
  {
    id: 2,
    title: "All Episodes Free Campaign!",
    subtitle: "Limited Time Only - Until 12/22",
    image: "https://picsum.photos/seed/banner2/1200/400",
    link: "/series",
  },
  {
    id: 3,
    title: "New Series Launch",
    subtitle: "Perfect Wife's Perfect Revenge",
    image: "https://picsum.photos/seed/banner3/1200/400",
    link: "/series/1",
  },
];
