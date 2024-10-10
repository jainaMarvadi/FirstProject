import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Fetch = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setItems(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return( <><div className='container'><p className='bg-light'>Error: {error}</p></div></>);
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Error deleting item: ${response.status}`);
            }

            // Update the state to remove the deleted item
            setItems(prevItems => prevItems.filter(item => item.id !== id));
            console.log(`Deleted item with ID: ${id}`); // Log success
        } catch (err) {
            console.error("Delete error:", err);
            setError(err.message);
        }
    };

    return (
        <div className='container'>
            <h1>Items(From Backend)</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <div class="card">
                            <img id='image' src={item.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">Price : {item.price}</p>
                                <h6>Discount : {item.discount}</h6>
                                <h6>Description : {item.description}</h6>
                                <h6>Delivery : {item.delivery}</h6>
                            </div>
                            <button 
                                id="bttn"
                                className="btn btn-secondary btn-outline primary" 
                                onClick={() => handleDelete(item.id)}>
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Fetch;
