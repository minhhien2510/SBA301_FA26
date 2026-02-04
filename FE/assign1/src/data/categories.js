// Mock data giống JSON backend trả về
// isActive: 1 = active, 0 = inactive

const categories = [
  {
    categoryID: 1,
    categoryName: "Education",
    categoryDescription: "Education related news",
    parentCategory: null,
    subCategories: [],
    isActive: 1,
  },
  {
    categoryID: 2,
    categoryName: "Technology",
    categoryDescription: "Technology and AI news",
    parentCategory: null,
    subCategories: [],
    isActive: 1,
  },
  {
    categoryID: 3,
    categoryName: "Event",
    categoryDescription: "University events",
    parentCategory: null,
    subCategories: [],
    isActive: 0,
  },
];

export default categories;
