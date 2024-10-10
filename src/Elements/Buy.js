import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Buy = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const deliveryCharge = 50; // Delivery charge fixed at ₹50

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data); // Log fetched data
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
        return (
            <div className='container'>
                <p className='bg-light'>Error: {error}</p>
            </div>
        );
    }

    // Calculate total price
    const totalPrice = items.reduce((total, item) => {
        const price = item.price || 0;  // Assuming price is now a number
        const discountPercentage = item.discount || 0;  // Assuming discount is now a number

        // Log values for debugging
        console.log(`Item: ${item.name}, Price: ${price}, Discount: ${discountPercentage}`);

        if (isNaN(price) || isNaN(discountPercentage)) {
            console.error(`Invalid price or discount for item: ${item.name}`, { price, discountPercentage });
            return total; // Skip this item if values are invalid
        }

        const discountAmount = (discountPercentage / 100) * price;
        return total + (price - discountAmount);
    }, 0);

    const finalTotalPrice = totalPrice + deliveryCharge;

    return (
        <>
        <div className="container">
            <h3 className="bg-warning">Buy This ALL</h3>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Price (₹)</th>
                        <th scope="col">Discount (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        const price = item.price || 0; // Assuming price is now a number
                        const discount = item.discount || 0;

                        return (
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{price.toFixed(2)} ₹</td>
                                <td>{discount.toFixed(2)} %</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p className="bg bg-light">Total Amount: {finalTotalPrice.toFixed(2)} ₹</p>
            <p className="bg bg-light">Delivery Charge Included: {deliveryCharge} ₹</p>
            <Link className="btn btn-success" to="/payment">Pay From Here</Link>
            <br></br>
            <Link id="bttn" className="btn btn-primary" to="/cart">Go Back</Link>
        </div>
        </>
    );
};

export default Buy;
