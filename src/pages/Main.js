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
import { SetPage, SetDrinkPage } from "../redux/Slice/Page";
import { usePagination } from "../hooks/Pagination";
import Drinks from "../components/DrinksBlock/Drinks";
import { getDrinks } from "../API/fetchdrinks";
import { getAllDrinks } from "../redux/Slice/AllPizzasSlice";
function App() {
  const dispatch = useDispatch();
  const SearchItem = useSelector((state) => state.filter.popular); // Redux popular filter
  const Searchcategory = useSelector((state) => state.filter.category); // Redux category filter
  const SearchSymbol = useSelector((state) => state.filter.symbol); // Redux input filter
  const PizzaPage = useSelector((state) => state.page.Pizzapage); // current Pizzapage
  const limit = useSelector((state) => state.page.limit); // current limit Pizzapage
  const DrinksPage = useSelector((state) => state.page.Drinkspage); // current Drinkpage
  const drinks = useSelector((state) => state.posts.Drinks); // all drinks
  const pizzes = useSelector((state) => state.posts.Pizzes); // all pizzes
  const lastelement = useRef(); // ref на lastelement
  const [getItems, load, error] = Fetch(async function getPosts() {
    const items = await fetchposts(PizzaPage, limit);
    const drinks = await getDrinks(DrinksPage, 4);
    if (PizzaPage < 3) dispatch(getAllPizzes([...items]));
    if (PizzaPage >= 4) dispatch(getAllDrinks([...drinks]));
  });
  usePagination(lastelement, PizzaPage <= 3, load, () =>
    dispatch(SetPage(PizzaPage + 1))
  ); // Infinity pagination for Pizza
  usePagination(lastelement, PizzaPage >= 4 && DrinksPage < 3, load, () =>
    dispatch(SetDrinkPage(DrinksPage + 1))
  ); // Infinity pagination for Drinks
  const Pages = useMemo(()=>{getItems();},[PizzaPage, DrinksPage])
  const SortedPosts = UseSortedPosts(
    Searchcategory,
    SearchItem,
    SearchSymbol,
    pizzes
  ); // Сортировка Пицц
  const SortedDrinks = UseSortedPosts(
    Searchcategory,
    SearchItem,
    SearchSymbol,
    drinks
  );
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
              (load && !pizzes.length && <Loader />) || (
                <>
                  <Pizza pizza={SortedPosts} />
                  {PizzaPage >= 3 && (
                    <div className="container_drinks">
                      <h2 className="content__title">Напитки</h2>
                      <div className="content__items">
                        <Drinks drinks={SortedDrinks} />
                      </div>
                    </div>
                  )}
                  <div style={{ opacity: 0 }} ref={lastelement}>
                    Control element
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
