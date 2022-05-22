import React, { useState } from "react";

const MobileSort = () => {
  const items = ["цене", "популярности"];
  const [state, setstate] = useState("");
  return (
    <div className="mediasort">
      <ul>
        {items.map((item, index) => (
          <li onClick={() => setstate(item)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileSort;
