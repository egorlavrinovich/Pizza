import React from "react";
import MobileSort from "../MobileSort/MobileSort";
import SortPopular from "../SortPopular/SortPopular";
import SortTaste from "../SortTaste/SortTaste";
const Panel = ({ sort, categories }) => {
  return (
    <div>
      <div className="content__top">
        <SortTaste Categories={categories}></SortTaste>
        <SortPopular sort={sort}></SortPopular>
      </div>
      <MobileSort></MobileSort>
    </div>
  );
};

export default Panel;
