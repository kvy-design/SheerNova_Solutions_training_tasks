import React from "react";
import App from "../App";
export default function ProductList({ products }) {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
