import { Link } from "react-router-dom";

const Bankdetails=()=>{
    return(
        <>
            <div className="container m-5">
                <div className="crad bg-light">
                <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">ID or PIN</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter UPI ID"/>
                </div>

                <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Address</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Address"/>
                </div>
                <button id="bttn" className="btn btn-warning" type="submit" onClick={()=>{
                    alert("Bank Details Added Successfully");
                    alert("Varify Details!")
                }}>Submit Details</button>
                </div>
                <Link id="bttn" className="btn btn-primary" to="/payment">Go Back</Link>
            </div>
        </>
    )
}

export default Bankdetails