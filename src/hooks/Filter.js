import { useMemo } from 'react';
const PopularPosts = (SearchItem,posts) => {
    const SortedPosts = useMemo(()=>{
    if (SearchItem) {
    if (SearchItem === "price") {
      return([...posts.sort((a, b) => a[SearchItem] - b[SearchItem])]);
    } else {
      return([...posts.sort((a, b) => b[SearchItem] - a[SearchItem])]); // ??? Допилить
    }
  }return posts
},[posts,SearchItem])
return SortedPosts
};

export const UseSortedPosts = (SearchCategory,SearchItem,posts) => {
    const result = PopularPosts(SearchItem,posts)
const ChoosedCategory = useMemo(()=>{
    if (SearchCategory) {
          if (SearchCategory == "all") {
            return posts
          } else {
            return([...posts.filter((items) => items[SearchCategory] == true)]);
          }
        }return posts
  },[result,SearchCategory])
  return ChoosedCategory
}