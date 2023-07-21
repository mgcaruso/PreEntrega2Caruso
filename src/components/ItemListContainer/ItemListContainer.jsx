import { useEffect, useState } from "react"
import cubeData from '../../utilities/cubesData.json'
import ItemList from "../../components/ItemList/ItemList";
import loader from '../../assets/animated/loader.gif'
import { fetchData } from "../../utilities/fetchingFn";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    //Simulación de método fetch()
    

    useEffect(() => {
        fetchData(cubeData).then(res => {
            setProducts(res);
            setLoading(false);
        }).catch(err => console.log(err));
    }, [])


    return (
        <main className="bg-neutral-lighter flex justify-center items-center">
            {loading ?
                <img src={loader} alt="Rubik's Cube Loader Image" />
                :
                <ItemList products={products} />
            }
        </main>
    )
}

export default ItemListContainer
