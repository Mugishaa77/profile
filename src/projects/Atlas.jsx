import AtlasHome from '../media/atlas_home.png';
import AtlasTwo from '../media/atlas_two.png';
import Catalogues from '../media/catalogues.png';
import IndustryReports from '../media/industry_reports.png';
import MarketReport from '../media/market_report.png';
import Schedule from '../media/schedule.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

export default function Atlas () {
    return (
        <div className="atlas lusitana-regular">
            <h1 className="">Atlas Tea Brokers Ltd
                <hr/></h1>            
            <div className="atlas-home">
            <img src={AtlasHome} alt="Atlas Landing Page Top" title="Atlas Landing Page Top" />
            <img src={AtlasTwo} alt="Atlas Landing Page Bottom" title="Atlas Landing Page Bottom"/>
                       
                        </div>
                       <div className="atlas-link">
                       <h4>See Project Link</h4>
                        <a href="https://atlas-omega.vercel.app/" target="_blank" rel="noopener noreferrer"
                         className="roboto-flex " title="External Link" >
                        'https://atlas-omega.vercel.app/'<sup> <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm"/>                   </sup> </a>  
                       </div>

                       <div className="atlas-overview">
                       <h2>Overview</h2>
            <p>I designed and developed the website for Atlas Tea Brokers to give them an online presence. 
                There was also a need to have a record of the auction catalogues available to the public domain
                to show their consistent record of trading tea at the Mombasa Trade Auction.
                In the works is the News section and Gallery Section of the Company. 
            </p>
            </div>
            <div className="atlas-layout">
            <h3>Layout</h3>
            <p>The website has seven pages, which are links on the navigation bar, namely: 
                <strong>
                Home, About,
                Services, Tea Auction, News, Gallery and Contact Section
                </strong>
            </p>
            </div>

            <div className="atlas-features">
            <h3>Key Features</h3>
                 <ul>
                    <li>
                        <strong>
                            Homepage:
                        </strong>
                        The homepage the company logo and slogan, 'We Know Tea' which is the brand of 
                        the company.
                    </li>

                    <li>
                       <strong>
                        Tea Auction:
                       </strong>
                       Section contains all the information relating to the Mombasa Tea Auction.
                        <br/>
                        This includes:
                        <ul className="auction-features ">
                            <li>
                                <img src={Schedule} alt="Atlas Auction Schedule" title="Atlas Auction Schedule"/>
                               <figcaption>
                               Auction Schedule</figcaption>
                               </li>

                            <li>
                                <img src={Catalogues} alt="Atlas Post Sale Catalogues" title="Atlas Post Sale Catalogues"/>
                               <figcaption>
                               Downloadable Post Sale Catalogues, in Excel Format</figcaption></li>

                            <li>
                                <img src={MarketReport} alt="Atlas Market Reports" title="Atlas Market Reports"/>
                               <figcaption>
                               Downloadable PDF Market Reports from the company's auction sales</figcaption></li>

                            <li><img src={IndustryReports } alt="Tea Board of Kenya Market Reports" title="Tea Board of Kenya Market Reports"/>
                              <figcaption>
                              Downloadable PDF Performance Reports from the Tea Board of Kenya</figcaption></li>
                        </ul>
                    
                    </li>

                    <li>
                        <strong>
                            Services Page :
                        </strong>
                        Highlights the services of the company
                    </li>

                    <li>
                        <strong>
                            News Section:
                        </strong>
                        Highlights current happenings within  the tea industry, with relevance to the 
                        performance at the tea auction.
                    </li>

                    <li>
                        <strong>
                            Contact Page:
                        </strong>
                        Contains the contact information (phone, email and social media links), feedback form,
                        live location and directions, business address and business address.
                    </li>

                    <li>
                        <strong>
                            Responsive Design:
                        </strong>
                        The website is accessible in smaller devices through responsive web design.
                    </li>
                 </ul>
            
            </div>

                    <div className="atlas-conclusion">
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
                   FrontEnd</strong> - Html, Css, React.js, Bootstrap
                </h6>
                <span>
                <a href="https://github.com/Mugishaa77/atlas" target="_blank" rel="noopener noreferrer"
                className="roboto-flex " title="External Link">
                <FontAwesomeIcon icon={faCode} fade style={{color: "#74C0FC",}} />
               Source Code 
               <FontAwesomeIcon icon={faCode} fade style={{color: "#74C0FC",}} />
              </a>
                </span>
                </div>
               <div className="stack">
               <h6>
                    <strong>
                    BackEnd</strong> - MongoDB, Express.js, Node.js
                </h6>
                <span>
                <a href="https://github.com/Mugishaa77/atlas-back-end" target="_blank" rel="noopener noreferrer"
                className="roboto-flex " title="External Link">
               <FontAwesomeIcon icon={faCode} fade style={{color: "#74C0FC",}} />
                Source Code
                <FontAwesomeIcon icon={faCode} fade style={{color: "#74C0FC",}} /></a>
                </span>
                
               </div>
                </div>
                    </div>
        </div>
    );
}