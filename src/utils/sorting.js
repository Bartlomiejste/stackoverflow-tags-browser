export const sortItems = (items, sort, order) => {
  let sorted = [...items];
  switch (sort) {
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "popular":
      sorted.sort((a, b) => a.count - b.count);
      break;
    default:
      break;
  }
  if (order === "desc") {
    sorted.reverse();
  }
  return sorted;
};
