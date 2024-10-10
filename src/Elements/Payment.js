import { Link } from "react-router-dom"

const Payment=()=>{
    return(
        <>
        <div className="conatiner">
            <h2>Choose PayMent Method</h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Pay On Delivery
                    <button class="btn btn-primary">Select</button>
                </li>
                <li class="list-group-item">PayMent
                    <Link className="btn btn-primary" to="/bankdetails">Pay</Link>
                </li>
                <li class="list-group-item">Jio Payment
                    <Link className="btn btn-primary" to="/bankdetails">Pay</Link>
                </li>
            </ul>
            <Link id="bttn" className="btn btn-primary" to="/buy">Go Back</Link>
        </div>
        </>
    )
}

export default Payment