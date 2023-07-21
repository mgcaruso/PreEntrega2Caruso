// import { useState } from "react"
// import cubeData from '../../utilities/cubesData.json'
// import ItemList from "../../components/ItemList/ItemList";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Products = () => {

    // const [products] = useState(cubeData);
    // const [filters, setFilters] = useState({
    //     // category: "all",
    //     maxPrice: 80,
    //     minPrice: 10,
    //     variantName: "all"
    // });

    // //Función que filtra:
    // const filterProducts = (products) => {
    //     return products.filter(product => {
    //         return (
    //             //Filtro por precio 
    //             (product.price <= filters.maxPrice && product.price >= filters.minPrice)


    //             // && 
    //             // //Filtro por categoria
    //             // (
    //             //     filters.category === "all" || product.category === filters.category
    //             // ) 

    //             &&
    //             //Filtro por variante
    //             (filters.variantName === "all" || product.variants.some((variant) => variant.name === filters.variantName))
    //         )
    //     })
    // }

    // const filteredProducts = filterProducts(products);

    return (
        <ItemListContainer />
    )
}

export default Products
