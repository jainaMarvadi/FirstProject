import React from "react";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
const HomeArrivals = () => {
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
                    <img src="./images/accessory1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Amici</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/accessory1.jpg', name: "Amici", price: 26547 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="col col-6 card">
                    <img src="./images/accessory4.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Blanket</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/accessory4.jpg', name: "Blanket", price: 3654 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="col col-6 card">
                    <img src="./images/accessory2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Pet Stuffs</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/accessory2.jpg', name: "Ear Care", price: 6987 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="col col-6 card">
                    <img src="./images/accessory3.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Soft Toy</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/accessory3.jpg', name: "Teddy", price: 987656 })}>
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

export default HomeArrivals;