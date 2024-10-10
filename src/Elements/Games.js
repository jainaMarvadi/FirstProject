import React from "react";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
const Games = () => {
    const [cartItems, setCartItems] = useState(() => {
        // Retrieve cart items from local storage on initial render
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        const updatedCartItems = [...cartItems, item];
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Save to local storage
        navigate('/cart', { state: { cartItems: updatedCartItems } });
    };

    return(
        <>
        <div className="container bg-primary-subtle">
            <div className="row m-5" style={{width: 1000}}>
                <div class="col col-6 card">
                    <img src="./images/ps5.jpg" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Card 1title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/ps5.jpg', name: "PS5", price: 1000000 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="col col-6 card">
                    <img src="./images/com1.jpg" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Mouse</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/com1.jpg', name: "Mouse", price: 65000 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="col col-6 card">
                    <img src="./images/com2.jpg" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Horizon</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/com2.jpg', name: "Horizon", price: 3652 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="col col-6 card">
                    <img src="./images/com3.jpg" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Stary</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/com3.jpg', name: "Stary", price: 2839 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mx-5" style={{width: 150}}>
                <Link className="btn btn-primary" to="/">Back</Link>
            </div>
        </div>
        </>
    )
}

export default Games;