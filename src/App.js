import "./scss/app.scss";
import Header from "./components/header/header";
import Panel from "./components/SortPanel/Panel/Panel";
import Pizza from "./components/Pizza-block/PizzaItem/Pizza";
import { useEffect, useMemo, useState } from "react";
import { UseSortedPosts } from './hooks/Filter';
import { fetchposts } from './API/fetchposts';
import Loader from './components/UI/Loader/Loader';
function App() {
  const [posts, setposts] = useState([
  ]);
  useEffect(()=>{
    async function getPosts()
    {const items = await fetchposts()
    setposts(items)}
      getPosts()
  },[])
  const [SearchItem,SetSearchItem] = useState("") // Сортировка: Цена, популярность
  const [SearchCategory,SetSearchCategory] = useState("") // Категории
  const SortedPosts = UseSortedPosts(SearchCategory,SearchItem,posts) // Кастомный хук сортировки
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <div className="container">
          <Panel sort={SetSearchItem} categories={SetSearchCategory} ></Panel>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {posts.length&&<Pizza pizza={SortedPosts}/>||<Loader/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
