// News Article mock data
// status: 1 = active, 0 = inactive
// categoryId: foreign key -> Category
// authorId: foreign key -> User (staff)

const news = [
  {
    id: 1,
    title: "Welcome to New Academic Year",
    content: "The university officially starts the new academic year...",
    categoryId: 1,
    authorId: 2,
    status: 1,
    tags: ["education", "student"]
  },
  {
    id: 2,
    title: "AI Technology in Education",
    content: "AI is playing an important role in modern universities...",
    categoryId: 2,
    authorId: 2,
    status: 1,
    tags: ["AI", "technology"]
  },
  {
    id: 3,
    title: "Sports Day Event",
    content: "Annual sports day event will be held next week...",
    categoryId: 3,
    authorId: 3,
    status: 0,
    tags: ["event", "sport"]
  },
];

export default news;
