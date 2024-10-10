import { Link,useNavigate } from "react-router-dom";
import SignIn from "./SignInPage";

const Home=()=>{
    const navigate=useNavigate()
    return(
        <>
        <div id="home" className="container">
            <nav id="home" class="navbar navbar-expand-lg bg-body-tertiary">
                <div id="home" class="container-fluid">
                    <img id="navimage" src="./images/amazonLogo.jpg"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-info" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ALL
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/signin">Sign In</Link></li>
                                    <li><Link class="dropdown-item" to="/">New Releases</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/">Customer services</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-info" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-link text-info" to="/history">History</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-info"to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="./images/carouselimage1.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./images/carouselimage2.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./images/carouselimage3.png" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./images/carouselimage4.png" alt="Fourth slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
            <div style={{marginTop: -90}} className="row">
                <div id="space" class="col card">
                <h5 class="card-title">New home arrivals under $50</h5>
                    <img class="card-img-top" src="./images/item1.png" alt="Card image cap" />
                        <div class="card-body">
                            {/* <h5 class="card-title">Card title</h5> */}
                            <Link to="/homearrival" class="btn btn-primary">Shop now</Link>
                        </div>
                </div>
                <div id="space" class="col card">
                    <h5 className="card-title">Shop deals in Fashion</h5>
                    <img class="card-img-top" src="./images/item2.png" alt="Card image cap" />
                        <div class="card-body">
                            {/* <h5 class="card-title">Card title</h5> */}
                            <Link to="/cloths" class="btn btn-primary">Shop now</Link>
                        </div>
                </div>
                <div id="space" class="col card">
                    <h5 className="card-title">Gaming Accessories</h5>
                    <img class="card-img-top" src="./images/item3.png" alt="Card image cap" />
                        <div class="card-body">
                            {/* <h5 class="card-title">Card title</h5> */}
                            <Link to="/games" class="btn btn-primary">Hurry up!</Link>
                        </div>
                </div>
            </div>
            <div className="row">
                <img src="./images/footer.png"></img>
            </div>
        </div>
        </>
    )
}

export default Home;