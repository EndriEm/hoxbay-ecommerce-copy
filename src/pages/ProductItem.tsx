import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type productItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export function ProductItem() {
  const [item, setItem] = useState<productItem>();
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.itemId}`)
      .then((resp) => resp.json())
      .then((items) => setItem(items));
  }, []);

  return (
    <div className="product-detail ">
      <img src={item?.image}></img>

      <div className="product-detail__side">
        <h2>{item?.title}</h2>
        <p>{item?.description}</p>
        <p>{item?.price} $</p>

        <button>Add to basket</button>
      </div>
    </div>
  );
}
