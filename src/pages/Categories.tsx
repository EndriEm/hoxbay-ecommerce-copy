import { Link } from "react-router-dom";

export function Categories(){
    return(
       <div >
        <ul className="categories-container__list">
           <Link to={"/categories/electronics"}><li className="categories-container__list-a">ELECTRONICS</li></Link>
           <Link to={"/categories/jewelery"}><li className="categories-container__list-a">JEWELERY</li></Link>
           <Link to={"/categories/men"}><li className="categories-container__list-a">MEN</li></Link>
           <Link to={"/categories/women"}><li className="categories-container__list-a">WOMEN</li></Link>

            
           
            
        </ul>
       </div> 
    )
}