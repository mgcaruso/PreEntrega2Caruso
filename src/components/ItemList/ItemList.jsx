
import Item from "../../components/Item/Item";

const ItemList = ({ products }) => {
    return (
        <section className="main-secondary-pages flex justify-center items-center font-body flex-row flex-wrap bg-neutral-lighter">
            {products.map((cube, index) => <Item key={index} cube={cube} />)}
        </section>
    )
}

export default ItemList
