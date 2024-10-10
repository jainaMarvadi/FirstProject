import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fetch from "./FetchedData";


const Cart = () => {
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem("cartItems")) || [];
    });

    const handleDelete = (id) => {
        // Filter out the item with the specified id
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems); // Update state
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update local storage
    };

    return (
        <>
            <div className='container'>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div className="card">
                                    <img style={{ width: 100 }} src={item.image} alt={item.name} />
                                    <div className="card-body">
                                        <h2>{item.name}</h2>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <button 
                                            id="bttn"
                                            className="btn btn-secondary btn-outline primary" 
                                            onClick={() => handleDelete(item.id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <Fetch></Fetch>
                <Link id="bttn" className="btn btn-success" to="/buy">Buy</Link>
                <Link id="bttn" className='btn btn-primary' to="/">Go Back</Link>
            </div>
        </>
    );
};

export default Cart;
