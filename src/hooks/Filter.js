import { useEffect, useMemo } from "react";
const PopularPosts = (SearchItem, posts) => {
  const SortedPosts = useMemo(() => {
    if (SearchItem) {
      if (SearchItem == "price") {
        return [...posts.sort((a, b) => a[SearchItem] - b[SearchItem])];
      } else if (SearchItem == "popular") {
        return [...posts.sort((a, b) => b[SearchItem] - a[SearchItem])];
      } else if (SearchItem == "name") {
        console.log(1);
        return [...posts].sort((a, b) =>
          a[SearchItem].localeCompare(b[SearchItem])
        );
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
