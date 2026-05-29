import { products } from "../data/products";
import ProductCard from "./ProductCard";
import "./comp-css/CategoryFilter.css";
function CategoryFilter({ category }) {

    return (

        <div className="category-filter">

            {products
                .filter(
                    product =>
                        product.category === category
                )
                .map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

        </div>
    );
}

export default CategoryFilter;