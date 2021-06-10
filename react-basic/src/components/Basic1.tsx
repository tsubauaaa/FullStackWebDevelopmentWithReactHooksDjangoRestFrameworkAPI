import React, { useState } from "react";

const Basic1: React.FC = () => {
  const [products, setProducts] = useState({ name: "", price: "" });

  return (
    <>
      <form>
        <input
          type="text"
          value={products.name}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setProducts({ ...products, name: evt.target.value })
          }
        />
        <input
          type="text"
          value={products.price}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setProducts({ ...products, price: evt.target.value })
          }
        />
      </form>
      <h3>Product name is {products.name}</h3>
      <h3>Product price is {products.price}</h3>
    </>
  );
};

export default Basic1;
