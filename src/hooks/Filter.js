import { useEffect, useMemo } from 'react';
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

export const UseSortedPosts = (SearchCategory,SearchItem,posts) => { // Посмотреть есть нюанс если НЕ кликаешься на Всё, то не работает сортировка по популярности
    const result = PopularPosts(SearchItem,posts)
    const ChoosedCategory = useMemo(()=>{
    if (SearchCategory||SearchItem) {
          if (SearchCategory == "all") {
            return result
          } else {
            return([...posts.filter((items) => items[SearchCategory] == true)]);
          }
        }return posts
  },[result,SearchCategory,SearchItem])
  return ChoosedCategory
}