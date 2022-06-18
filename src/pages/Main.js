import "../scss/app.scss";
import Header from "../components/header/header";
import Panel from "../components/SortPanel/Panel/Panel";
import Pizza from "../components/Pizza-block/PizzaItem/Pizza";
import { useEffect, useMemo, useRef, useState } from "react";
import { UseSortedPosts } from "../hooks/Filter";
import { fetchposts } from "../API/fetchposts";
import Loader from "../components/UI/Loader/Loader";
import { Fetch } from "../hooks/RequestHandling";
import errorimage from "../assets/img/Error.gif";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/button/button";
import { filterPopular, filterCategory } from "../redux/Slice/FilterSlice";
import { getAllPizzes, fetchUserById } from "../redux/Slice/AllPizzasSlice";
import { SetPage } from "../redux/Slice/Page";
import { usePagination } from "../hooks/Pagination";
function App() {
  const dispatch = useDispatch();
  const SearchItem = useSelector((state) => state.filter.popular); // Redux popular filter
  const Searchcategory = useSelector((state) => state.filter.category); // Redux category filter
  const SearchSymbol = useSelector((state) => state.filter.symbol); // Redux input filter
  const page = useSelector((state) => state.page.page); // current page
  const limit = useSelector((state) => state.page.limit); // current limit
  const posts = useSelector((state) => state.posts.Pizzes); // all posts
  const lastelement = useRef();
  const [getItems, load, error] = Fetch(async function getPosts() {
    const items = await fetchposts(page, limit);
    if (page <= 2) dispatch(getAllPizzes([...items]));
  });
  usePagination(lastelement, page < 3, load, () => dispatch(SetPage(page + 1)));
  useEffect(() => {
    getItems();
  }, [page]);
  const SortedPosts = UseSortedPosts(
    Searchcategory,
    SearchItem,
    SearchSymbol,
    posts
  ); // Кастомный хук сортировки
  function SetSearchItem(item) {
    dispatch(filterPopular(item));
  }
  function SetCategory(item) {
    dispatch(filterCategory(item));
  }
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <div className="container">
          <Panel sort={SetSearchItem} categories={SetCategory}></Panel>
          <h2 className="content__title">Пиццы</h2>
          <div className="content__items">
            {!error ? (
              (load && !posts.length && <Loader />) || (
                <>
                  <Pizza pizza={SortedPosts} />
                  <div style={{ opacity: "0" }} ref={lastelement}>
                    Контролируемый элемент
                  </div>
                </>
              )
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
