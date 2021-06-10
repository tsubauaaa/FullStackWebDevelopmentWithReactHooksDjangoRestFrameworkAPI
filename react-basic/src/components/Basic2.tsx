import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
}

const Basic2: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const newProduct = () => {
    setProducts([
      ...products,
      {
        id: products.length,
        name: "Hello React",
      },
    ]);
  };

  return (
    <div>
      <button onClick={newProduct}>Add New Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} id: {product.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basic2;
