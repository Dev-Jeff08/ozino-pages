import { Links } from "@remix-run/react";
import { Link } from "@remix-run/react";

function ProductDisplay({ item }) {

    const image_path = `/images/${item.image}`

    console.log(item.image)

    return (
        <>
            <div className="window">
                <img src={image_path} alt="" className="window-image" />
                <span className="product_name">{item.name}</span>
                <span className="window-description">{item.description}</span>
            </div>
        </>
    )
}

export default ProductDisplay;