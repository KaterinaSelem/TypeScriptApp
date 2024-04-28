import { useState } from "react";

import Button from "components/Button/Button";
import {ProductListWrapper, ListTytle, ListEntery, ListProduckt} from "./styles.ts";
import { products } from "./data";

function ProductsList() {
  const [chosenProducts, setChosenProducts] = useState([]);

  const productsArray = products.map((product) => {
    return (
      <div key={product.id} className="list-entry">
        <p>{product.name}</p>
        <Button name="Add" onButtonClick={() => addProduct(product.id)} />
        <Button name="Remove" onButtonClick={() => {}} />
      </div>
    );
  });

  const addProduct = (id) => {
    let searchedEl = products.find((product) => {
      return product.id === id;
    });
    setChosenProducts(searchedEl);

    console.log(searchedEl);
    console.log(chosenProducts);
  };
}

  return (
    <ProductListWrapper>
      <ListTytle>Products List:</ListTytle>
      <ListProduckt>{productsArray}</ListProduckt>

      <ListTytle>Selected Products:</ListTytle>
      <ListProduckt></ListProduckt>
    </ProductListWrapper>
  );



export default ProductsList;
