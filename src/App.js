import "./scss/app.scss";
import Header from "./components/header/header";
import Panel from "./components/SortPanel/Panel/Panel";
import Pizza from "./components/Pizza-block/PizzaItem/Pizza";
import { useEffect, useMemo, useState } from "react";
import { UseSortedPosts } from "./hooks/Filter";
import { fetchposts } from "./API/fetchposts";
import Loader from "./components/UI/Loader/Loader";
import { Fetch } from "./hooks/RequestHandling";
import errorimage from "./assets/img/Error.gif";
function App() {
  const [posts, setposts] = useState([]);
  const [getItems, load, error] = Fetch(async function getPosts() {
    const items = await fetchposts();
    setposts(items);
  });
  useEffect(() => {
    getItems();
  }, []);
  console.log(load);
  const [SearchItem, SetSearchItem] = useState(""); // Сортировка: Цена, популярность
  const [SearchCategory, SetSearchCategory] = useState(""); // Категории
  const SortedPosts = UseSortedPosts(SearchCategory, SearchItem, posts); // Кастомный хук сортировки
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <div className="container">
          <Panel sort={SetSearchItem} categories={SetSearchCategory}></Panel>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {!error ? (
              (load && <Loader />) || <Pizza pizza={SortedPosts} />
            ) : (
              <div className="error">
                <div className="text">{`Ошибка: ${error}`}</div>
                <img src={errorimage} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
