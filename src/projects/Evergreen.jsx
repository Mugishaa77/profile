import EvergreenHome from '../media/evergreen_home.png';
import EvergreenMarket from '../media/evergreen_market.png';
import EvergreenBasket from '../media/evergreen_basket.png';
import CheckoutOne from '../media/checkout_one.png';
import CheckoutTwo from '../media/checkout_two.png';
import CheckoutThree from '../media/checkout_three.png';
import CheckoutFour from '../media/checkout_four.png';
import EvergreenClear from '../media/evergreen_clear.png';
import EvergreenLogin from '../media/evergreen_login.png';
import EvergreenDashboard from '../media/evergreen_dashboard.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

export default function Evergreen () {
    return (
        <div className="evergreen">
            <h1>Evergreen Farms Limited</h1>
            <div className="evergreen-home">
            <img src={EvergreenHome} alt="Evergreen HomePage" />
            </div>

            <div className="evergreen-link">
                       <h4 className="lusitana-bold">See Project Link</h4>
                        <a href="https://new-evergreen.vercel.app/" target="_blank" rel="noopener noreferrer"
                         className="roboto-flex " title="External Link" >
                        'https://new-evergreen.vercel.app/'<sup> <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm"/>                   </sup> </a>  
                       </div>

                      <div className=" lusitana-regular evergreen-overview">
                      <h2>Overview</h2>
                       <p>
                       Evergreen Farms Limited was my first web design project. It was originally a prototype of 
                       an e-commerce, agribusiness platform, but I have been working on it to make a fully functional web application.
                       The intended purpose of the application is to provide an online market place, connecting farmers and 
                       grocers directly to consumers, eliminating the need for middle men. This in turn leads to reduced food 
                       prices and increased revenue for farmers. This is because, when the middlemen who are notorious for 
                       inflating food prices to get kickbacks are eliminated from the budget, an unnecessary expense is cut off,
                       farmers are free to set food prices that are both profitable to them and reasonable to the consumer. </p>

                      </div>
                       <div className="evergreen-problem lusitana-regular">
                       <h3>Problem Solved</h3>
                       <p>Food security is improved within our borders as cost of production/transportation is significantly
                        reduced.
                       </p>
                       </div>

            <div className="evergreen-features lusitana-regular">
            <h2> Main Features</h2>
            <h4>Buyer's Interface</h4>
            <ul>
                <li>
                    <strong>
                       1. Market Page
                    </strong>
                    <br/>
                    This is the first point of contact after clicking the call-to-action (cta) button on the 
                    website homepage. It contains a catalogue of the available products on the homepage, their prices and the option 
                    to add to cart. The items displayed are fetched from the backend server and displayed on the client side.
                    <div className="evergreen-market">
                    <img src={EvergreenMarket} alt="Evergreen MarketPage" />
                    </div>
                </li>

                <li>
                    <strong>
                       2. Shopping Basket
                    </strong>
                    <br/>
                    This is the basket page where you have the option to checkout or keep shopping. 
                    You are able to see a live inventory of the <strong>product name, price, quantity, 
                    total price per item and the subtotal of all the items    </strong>
                    <div className="evergreen-basket">
            <img src={EvergreenBasket} alt="Evergreen HomePage" />
            </div>
                    <br/>

                </li>

                <li>
                    <strong>
                       3.Checkout
                    </strong>
                    <br/>
                    This section contains a progress bar that helps in the checkout process. There are 5 steps to be 
                    followed: <strong>Order summary receipt, Billing information, Payment method, Order confirmation and
                        finally the Order is complete.
                      </strong>
                    <ul className="evergreen-checkout">
                            <li>
                                <img src={CheckoutOne} alt="Evergreen Order Summary" title="Evergreen Order Summary"/>
                               <figcaption>
                               Order Summary</figcaption>
                               </li>

                            <li>
                                <img src={CheckoutTwo} alt="Evergreen Billing Information" title="Evergreen Billing Information"/>
                               <figcaption>
                               Billing Information</figcaption></li>

                            <li>
                                <img src={CheckoutThree} alt="Evergreen Payment Method" title="Evergreen Payment Method"/>
                               <figcaption>
                               Payment Method</figcaption></li>

                            <li><img src={CheckoutFour } alt="Evergreen Order Confirmation" title="Evergreen Order Confirmation"/>
                              <figcaption>
                              Order Confirmation</figcaption></li>
                        </ul>

                </li>

                <li>
                    <strong>
                        5.Clear Basket
                    </strong>
                    <br/>
                    Used to refresh the shopping basket when clear basket is clicked.
                <div className="evergreen-clear">
            <img src={EvergreenClear} alt="Evergreen Clear Basket" />
            </div>
                </li>

                <li>
                    <strong>
                      6.User Authentication
                    </strong>
                    <br/>
                    A signup and Login form and process that is used to register and authenticate users from 
                    the backend and enable them to create user accounts within the platform
                    <div className="evergreen-login">
            <img src={EvergreenLogin} alt="Evergreen Login" />
            </div>

                </li>
            </ul>

            <h4>Grocer and Farmer Interface</h4>
            <p>
                Ideally, the farmers and grocers are the ones expected to provide products from their stalls.
                They have a separate UI which contains a dashboard where they are able to view and upload their products
                and communicate durectly with their customers.
                They are also allowed to have a user inventory and performance summary.
            </p>
            <div className="evergreen-dashboard">
            <img src={EvergreenDashboard} alt="Evergreen Dashboard" />
            </div>
            </div>
        
            <div className="evergreen-conclusion lusitana-regular">
                    <h4>Technologies used</h4>
                <h5>Tech Stack</h5>
                <p>
                    <strong>
                    MERN Stack - Mongo db, Express.js, React.js, Node.js
                    </strong>
                </p>
                <div className="stack-wrap">
                <div className="stack">
                <h6>
                   <strong>
                   FrontEnd</strong> - Redux-toolkit, Html, Css, React.js, Bootstrap
                </h6>
                <span>
                <a href="https://github.com/Mugishaa77/new-evergreen" target="_blank" rel="noopener noreferrer"
                className="roboto-flex " title="External Link">
                <FontAwesomeIcon icon={faCode} fade style={{color: "#497351",}} />
               Source Code 
               <FontAwesomeIcon icon={faCode} fade style={{color: "#497351",}} />
              </a>
                </span>
                </div>
               <div className="stack">
               <h6>
                    <strong>
                    BackEnd</strong> - MongoDB, Express.js, Node.js, Bcrypt
                </h6>
                <span>
                <a href="https://github.com/Mugishaa77/my-backend-interface" target="_blank" rel="noopener noreferrer"
                className="roboto-flex " title="External Link">
               <FontAwesomeIcon icon={faCode} fade style={{color: "#497351",}} />
                Source Code
                <FontAwesomeIcon icon={faCode} fade style={{color: "#497351",}} /></a>
                </span>
                
               </div>
               </div>
               </div>
        </div>
    );
}