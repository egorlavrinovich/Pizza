import { useEffect, useMemo } from "react";
const PopularPosts = (SearchItem, posts) => {
  const SortedPosts = useMemo(() => {
    if (SearchItem) {
      switch (SearchItem) {
        case "price":
          return [...posts.sort((a, b) => a[SearchItem] - b[SearchItem])];
        case "popular":
          return [...posts.sort((a, b) => b[SearchItem] - a[SearchItem])];
        case "name":
          return [...posts].sort((a, b) =>
            a[SearchItem].localeCompare(b[SearchItem])
          );
        default:
          return posts;
      }
    }
    return posts;
  }, [posts, SearchItem]);
  return SortedPosts;
};

export const UseSortedPosts = (SearchCategory = "all", SearchItem, posts) => {
  console.log(SearchItem);
  const result = PopularPosts(SearchItem, posts);
  const ChoosedCategory = useMemo(() => {
    if (SearchCategory) {
      if (SearchCategory == "all") {
        return result;
      } else {
        return [...posts.filter((items) => items[SearchCategory] == true)];
      }
    }
    return result;
  }, [result, SearchCategory, SearchItem]);
  return ChoosedCategory;
};
