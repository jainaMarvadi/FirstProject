import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignIn=()=>{
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const checkmail = (event) => {
        event.preventDefault();
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return false;
        }
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    return (
        <>
            <div className="container m-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card border border-warning bg-warning-subtle">
                            <div className="card-body">
                                <h5 className="card-title">Sign In</h5>
                                <form onSubmit={checkmail}>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Email" onChange={
                                            handleEmailChange
                                        } />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your
                                            email with anyone else.
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                        placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                                </form>
                                <p className="text-right">Don't have an account? <a href="/signin">Sign UP</a>
                                </p>
                                <button type="reset" className="btn btn-primary" onClick={
                                    () => {
                                        navigate('/')
                                    }
                                }>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;