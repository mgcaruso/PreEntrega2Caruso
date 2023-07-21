import { useState } from "react";

const ItemCount = ({ cubeData }) => {
    const shadow = {
        strong: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        light: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    };

    const [quantity, setQuantity] = useState(1);

    const handleAddItem = () => {
        if (quantity < cubeData.stock) {
            setQuantity(quantity + 1);
        }
    }

    const handleRemoveItem = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <div className="btn-box flex w-full justify-around  m-1 border-neutral-lighter border-t-[1px] border-b-[1px] bg-primary-hover rounded-md">
                <button onClick={handleRemoveItem} className="remove font-bold flex-grow hover:bg-neutral-lighter hover:text-primary-inverted ease-in duration-100" >-</button>
                <div className="quantity flex-grow flex items-center justify-center py-1">{cubeData.stock < 1 ? 0 : quantity}</div>
                <button onClick={handleAddItem} className="add font-bold flex-grow hover:bg-neutral-lighter hover:text-primary-inverted ease-in duration-200" >+</button>
            </div>
            <button style={{
                boxShadow: shadow.light
            }} className={cubeData.stock < 1 ? "rounded-md border-2 border-neutral-lighter p-1 text-neutral" : "rounded-md border-2 border-primary-inverted p-1 text-primary-inverted hover:text-primary hover:bg-primary-inverted ease-in duration-300"}>Add to Cart</button>
        </>
    )
}

export default ItemCount
