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
          return posts;
        default:
          return posts;
      }
    }
    return posts;
  }, [posts, SearchItem]);
  return SortedPosts;
};

const SearchPosts = (posts, SearchSymbol) => {
  if (SearchSymbol) {
    return [
      ...posts.filter((item) =>
        item.name.toLowerCase().includes(SearchSymbol.toLowerCase())
      ),
    ];
  }
  return posts;
};

export const UseSortedPosts = (
  SearchCategory,
  SearchItem,
  SearchSymbol = "",
  posts
) => {
  const result2 = SearchPosts(PopularPosts(SearchItem, posts), SearchSymbol);
  const ChoosedCategory = useMemo(() => {
    if (SearchCategory) {
      if (SearchCategory == "all") {
        return result2;
      } else {
        console.log(2);
        return [...result2.filter((items) => items[SearchCategory] == true)];
      }
    }
    return result2;
  }, [result2, SearchCategory, SearchItem, SearchSymbol]);
  return ChoosedCategory;
};
