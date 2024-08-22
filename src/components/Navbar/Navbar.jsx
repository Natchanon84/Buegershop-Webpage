import "./Navbar.css"
import { IoBagOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

function Navbar() {

    return (
        <div className="container-navbar">
            <div className="navbar-icon">
                <img src="data:image/png;base64,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" alt="/"></img>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Shop</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="other">
                <div className="other-icon">
                    <GoPerson />
                </div>
                <div className="other-icon">
                    <IoBagOutline />
                </div>


            </div>
        </div>
    )
}

export default Navbar 