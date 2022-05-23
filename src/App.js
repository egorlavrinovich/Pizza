import "./scss/app.scss";
import Header from "./components/header/header";
import Panel from "./components/SortPanel/Panel/Panel";
import Pizza from "./components/Pizza-block/PizzaItem/Pizza";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [posts, setposts] = useState([
    {
      id: Date.now(),
      name: "Сырная",
      price: 650,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/10abc7eb6428475c9263709a1266558c_760x760.jpeg",
      vegetarian: true,
      popular: 1,
    },
    {
      id: Date.now(),
      name: "Ветчина и сыр",
      price: 50,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_760x760.jpeg",
      meet: true,
      popular: 1,
    },
    {
      id: Date.now(),
      name: "Чоризо фреш",
      price: 150,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/fd9cf22de8054f3e896969e6fb0e2c21_760x760.jpeg",
      popular: 1,
      peperoni: true,
      meet: true,
    },
    {
      id: Date.now(),
      name: "Домашняя",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/45e50d71297c411bbe1f37f506f9ab18_760x760.jpeg",
      popular: 1,
      meet: true,
    },
    {
      id: Date.now(),
      name: "Пепперони фреш",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/eb6d128bbcd340e98fd4f14b377e769f_760x760.jpeg",
      popular: 2,
      peperoni: true,
      meet: true,
    },
    {
      id: Date.now(),
      name: "Грибная",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/f773f5016e154a7f963377494e14d6d4_760x760.jpeg",
      popular: 2,
      meet: true,
      mashrooms: true,
    },
    {
      id: Date.now(),
      name: "Овоши гриль",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/772d900150264e119a86571b302a3651_760x760.jpeg",
      popular: 3,
      vegetarian: true,
      mashrooms: true,
    },
    {
      id: Date.now(),
      name: "Цыпленок барбекю",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/57157f013c164840a24c1d49c7adb3b6_760x760.jpeg",
      popular: 3,
      meet: true,
    },
    {
      id: Date.now(),
      name: "Супер мясная",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/5b5d246f1d154bd39f606d1d72899a27_366x366.jpeg",
      popular: 3,
      meet: true,
    },
    {
      id: Date.now(),
      name: "Гавайская",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/5bf1c77b3ff44f93bb01c840ab35b033_366x366.jpeg",
      popular: 3,
      meet: true,
      pineapple: true,
    },
    {
      id: Date.now(),
      name: "2 пиццы",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/3dd695c73c494b2b9dd274738cf496d3_760x760.webp",
      popular: 110,
      meet: true,
      mashrooms: true,
      sale: true,
    },
    {
      id: Date.now(),
      name: "3 пиццы",
      price: 250,
      url: "https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/7beab954b188409ba30dad2c2fda13e2_366x366.webp",
      popular: 100,
      meet: true,
      mashrooms: true,
      sale: true,
    },
  ]);
  const [SearchItem,SetSearchItem] = useState("")
  const [SearchCategory,SetSearchCategory] = useState("")
  const SortedPosts = useMemo(()=>{
    if (SearchItem) {
    if (SearchItem === "price") {
      return([...posts.sort((a, b) => a[SearchItem] - b[SearchItem])]);
    } else {
      return([...posts.sort((a, b) => b[SearchItem] - a[SearchItem])]); // ??? Допилить
    }
  }return posts
},[posts,SearchItem])
  const ChoosedCategory = useMemo(()=>{
    if (SearchCategory) {
          if (SearchCategory == "all") {
            return posts
          } else {
            return([...posts.filter((items) => items[SearchCategory] == true)]);
          }
        }return posts
  },[posts,SortedPosts,SearchCategory])

  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <div className="container">
          <Panel sort={SetSearchItem} categories={SetSearchCategory} ></Panel>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <Pizza pizza={ChoosedCategory} />
          </div>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;
