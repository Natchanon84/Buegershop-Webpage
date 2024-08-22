import "./Section1.css"
import drink from "../../Picture/drink.svg"
import burger from "../../Picture/burger.svg"
import pizza from "../../Picture/pizza.svg"
import cupcake from "../../Picture/cupcake.svg"
import service from "../../Picture/service.svg"
import Bigburger from "../../Picture/Bigburger.png"
import burgerAdd1 from "../../Picture/burger-add1.jpg"
import spaghettiAdd2 from "../../Picture/Spaghetti-add2.jpg"
import burgerAdd3 from "../../Picture/burger-add3.jpg"
import burgerAdd4 from "../../Picture/burger-add4.jpg"
import circle1 from "../../Picture/circle1.png"
import circle2 from "../../Picture/circle2.png"
import circle3 from "../../Picture/circle3.png"
import circle4 from "../../Picture/circle4.png"
import delivery from "../../Picture/delivery.svg"
import clock24 from "../../Picture/24hours.svg"
import chef from "../../Picture/chef.svg"
import news from "../../Picture/news.svg"


function Section1() {

    return (
        <div>
            <div className="container section1">
                <div className="content">
                    <h2>The Number <span>#1</span><br /> Choice Your Hunger <br />Solution</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi maxime a laudantium sapiente ipsam ullam culpa ducimus esse accusamus architecto ipsa amet, consectetur ratione tenetur quam libero? Voluptates.</p>
                    <div className="button-content">
                        <button className="button button-item1">Book a Table</button>
                        <button className="button button-item2">View More</button>
                    </div>

                    <div className="icon">
                        <img src={drink}></img>
                        <img src={burger}></img>
                        <img src={pizza}></img>
                        <img src={cupcake}></img>
                        <img src={service}></img>
                    </div>
                </div>
                <div className="bigburger">
                    <img src={Bigburger}></img>
                </div>
            </div>

            <div className="container section2">
                <div className="add-item1">
                    <img src={burgerAdd1}></img>

                </div>
                <div className="add-item2">
                    <img src={spaghettiAdd2}></img>
                </div>
                <div className="add-item3">
                    <img src={burgerAdd3}></img>
                </div>
                <div className="add-item4">
                    <img src={burgerAdd4}></img>
                </div>
            </div>

            <div className="container section3 bg-section3">
                <span className="text-section3">Our Featured Food</span>

                <div className="section3-item1 bg">
                    <div className="circle-section3">
                        <img src={circle1}></img>
                    </div>
                    <div className="menu-section3">Pizza</div>
                    <div className="content-section3">Lorem ipsum dolor sit amet consectetur adipiscing.</div>
                    <div className="price-section3">$55.00</div>
                    <button className="btn-section3">Add To Card</button>
                </div>

                <div className="section3-item2 bg">
                    <div className="circle-section3">
                        <img src={circle2}></img>
                    </div>
                    <div className="menu-section3">Rice</div>
                    <div className="content-section3">Lorem ipsum dolor sit amet consectetur adipiscing.</div>
                    <div className="price-section3">$50.00</div>
                    <button className="btn-section3">Add To Card</button>
                </div>

                <div className="section3-item3 bg">
                    <div className="circle-section3">
                        <img src={circle3}></img>
                    </div>
                    <div className="menu-section3">Green Salad</div>
                    <div className="content-section3">Lorem ipsum dolor sit amet consectetur adipiscing.</div>
                    <div className="price-section3">$45.00</div>
                    <button className="btn-section3">Add To Card</button>
                </div>

                <div className="section3-item4 bg">
                    <div className="circle-section3">
                        <img src={circle4}></img>
                    </div>
                    <div className="menu-section3">Pasta</div>
                    <div className="content-section3">Lorem ipsum dolor sit amet consectetur adipiscing.</div>
                    <div className="price-section3">$35.00</div>
                    <button className="btn-section3">Add To Card</button>
                </div>

            </div>

            <div className="container section4">
                <div className="bg-section4">
                    <p className="text-section4">Why Choose Us ?</p>

                    <div className="icon-text-section4">
                        <div className="section4-item1 sc4">
                            <img src={delivery}></img>
                            <p>24/7 Free Delivery</p>
                        </div>
                        <div className="section4-item2 sc4">
                            <img src={clock24}></img>
                            <p>Restaurant is Open Around the Clock</p>
                        </div>
                        <div className="section4-item3 sc4">
                            <img src={chef}></img>
                            <p>Best Chef</p>
                        </div>
                        <div className="section4-item4 sc4">
                            <img src={news}></img>
                            <p>We Have The Freshest Product</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Section1