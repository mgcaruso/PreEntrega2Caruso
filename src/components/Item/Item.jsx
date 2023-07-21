import { useState } from "react"
import IconVariant from "../IconVariant/IconVariant";
import ItemCount from "../ItemCount/ItemCount";
import { Badge } from 'flowbite-react';
import './item.css'


const Item = ({ cube }) => {

    const getColor = (item) => {
        switch (item) {
            case ("New"):
                return "success"
            case ("Last Units"):
                return "warning"
            case ("Offer"):
                return "failure"
            default:
                return "dark";
        }
    }

    const [variant, setVariant] = useState(cube.variants[0]);
    const handleVariantImage = (v) => {
        setVariant(v)
    }
    return (
        <div className="item max-w-sm w-[18rem] rounded overflow-hidden shadow-lg bg-primary mx-2 my-3 relative">

            {
                cube.stock > 1 &&
                <div className="specials-box absolute z-30 flex">
                    {
                        cube.specials.map((item, index) =>
                            <Badge size="sm" key={index} className="m-1 font-normal" color={getColor(item)}>
                                {item}
                            </Badge>)
                    }
                </div>
            }

            <div className="image-box relative">


                {   //No stock
                    cube.stock < 1 &&
                    <div className="no-stock">
                        <div className="stock-title">OUT OF STOCK</div>
                    </div>
                }
                <img className="w-full h-[14rem] object-cover" src={variant && variant.image} alt="Sunset in the mountains" />
            </div>
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 min-h-[3.6rem]">{cube.name.toUpperCase()}</h3>
                <section className="flex justify-between items-center">

                    <div className="brand-section">
                        <p className="text-gray-700 text-base">
                            {cube.brand}
                        </p>
                        <h2 className="text-2xl font-medium"><span className="text-[18px]">$</span>

                            {cube.price.toString().split(".")[0]}
                            <span className="text-sm absolute">{cube.price.toString().split(".")[1]}</span>
                        </h2>
                    </div>
                    <div className="variant-section flex gap-1">
                        {cube.variants.map((vnt, index) => {
                            return (
                                <button className={vnt.name === variant.name ? "ring-2 ring-neutral rounded-md" : "hover:ring-2 hover:ring-neutral-lighter rounded-md hover:shadow-md shadow-sm"} onClick={() => handleVariantImage(vnt)} key={index}>
                                    <IconVariant variant={vnt.name} />
                                </button>
                            )
                        }
                        )}
                    </div>
                </section>
            </div>
            <div className="cart-section px-6 pb-4 flex flex-col justify-center gap-1">
                <ItemCount cubeData={cube} />
            </div>

        </div>
    )
}

export default Item
