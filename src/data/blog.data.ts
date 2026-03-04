export interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
}

const blogItem: BlogItem[] = [
  {
    id: 1,
    title: "How to Own Your Audience by Creating an Email List",
    description:
      "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b",
    image: "/projects/project-1.jpg",
    date: "2023-01-01",
    url: "/blog/1",
  },
  {
    id: 2,
    title: "Top 10 Toolkits for Deep Learning in 2022",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e",
    image: "/projects/project-2.jpg",
    date: "2023-01-01",
    url: "/blog/2",
  },
  {
    id: 3,
    title: "Everything You Need to Know About Web Accessibility",
    description:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma",
    image: "/projects/project-3.jpg",
    date: "2023-01-01",
    url: "/blog/3",
  },
  {
    id: 4,
    title: "How to Inject Humor into Your Design",
    description:
      "Blog based brief description/projection fix for humor in design strategies.",
    image: "/projects/project-4.jpg",
    date: "2023-01-01",
    url: "/blog/4",
  },
  {
    id: 5,
    title: "Women in Web Design: How to Get Started",
    description:
      "Blog based brief description/projection fix for women in the web design industry.",
    image: "/projects/project-5.jpg",
    date: "2023-01-01",
    url: "/blog/5",
  },
  {
    id: 6,
    title: "Evergreen versus topical content",
    description:
      "Blog based brief description/projection fix for evergreen vs topical content strategies.",
    image: "/projects/project-6.jpg",
    date: "2023-01-01",
    url: "/blog/6",
  },
];

export { blogItem };
