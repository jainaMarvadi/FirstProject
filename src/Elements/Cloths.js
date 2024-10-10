import React from "react";
import { useState } from "react";
import {Link , useNavigate } from "react-router-dom";

const Cloth = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    
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

    return (
        <div className="container bg-primary-subtle">
            <div className="row m-5" style={{ width: 1000 }}>
                <div className="col col-6 card">
                    <img src="./images/Cloth1.jpg" className="card-img-top" alt="jumpsuit" />
                    <div className="card-body">
                        <h5 className="card-title">Jumpsuit</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/Cloth1.jpg', name: "Jumpsuit", price: 100 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="col col-6 card">
                    <img src="./images/Cloth2.jpg" className="card-img-top" alt="flower frock" />
                    <div className="card-body">
                        <h5 className="card-title">Flower Frock</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/Cloth2.jpg', name: "Flower Frock", price: 150 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="col col-6 card">
                    <img src="./images/cloth3.jpg" className="card-img-top" alt="lavender nightsuit" />
                    <div className="card-body">
                        <h5 className="card-title">Lavender Nightsuit</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:"./images/cloth3.jpg", name: "Lavender Nightsuit", price: 250 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="col col-6 card">
                    <img src="./images/cloth4.jpg" className="card-img-top" alt="black plazo & top" />
                    <div className="card-body">
                        <h5 className="card-title">Black Plazo & Top</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/cloth4.jpg', name: "Black Plazo & Top", price: 300 })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="col col-6 card">
                    <img src="./images/cloth4.jpg" className="card-img-top" alt="black plazo & top" />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart({image:'./images/cloth4.jpg', name: "Black Plazo & Top", price: 300 })}>
                            
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mx-5" style={{ width: 150 }}>
                <Link className="btn btn-primary" to="/">Back</Link>
            </div>
        </div>
    );
}

export default Cloth;
