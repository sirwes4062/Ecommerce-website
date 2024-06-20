import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/Shopcontext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Items from "../components/Items/Items";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="sortcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
