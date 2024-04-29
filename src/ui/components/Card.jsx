import { useEffect, useState } from "react";
import './Card.css'

export const Card = () => {

    const [product, setProduct] = useState([]);

    useEffect (() => {
        const id = Math.floor(Math.random() * 100) + 1; 
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            const randomImage = data.images[Math.floor(Math.random() * data.images.length)];
            data.images = randomImage;
            setProduct(data)})
    }, []);

    return (
            
        <div className="product-card">
            <div className="badge">Now</div>
                <div className="product-tumb">
                    <img src={product.images} alt={product.title} />
                </div>
            <div className="product-details">
                <span className="product-catagory">{product.category}</span>
                <h4><a href="">{product.title}</a></h4>
                <p>{product.description}</p>
                <div className="product-bottom-details">
                    <div className="product-price">Price ${product.price}</div>
                </div>
            </div>
        </div>
    )
};


