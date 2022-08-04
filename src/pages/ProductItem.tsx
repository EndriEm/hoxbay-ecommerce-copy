import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductItem() {

  const[item, setItem] = useState()
const params = useParams()

useEffect(() => {
  fetch(`http://localhost:4000/products/${params.itemId}`)
  .then(resp => resp.json())
  .then(itemFromServer => setItem(itemFromServer))
},[])

  return (
    <div className="product-detail ">
      <img src=""></img>

      <div className="product-detail__side">
        <h2></h2>
        <p></p>
        <p>£</p>
      </div>
    </div>
  );
}
