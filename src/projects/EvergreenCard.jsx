import EvergreenHome from '../media/evergreen_home.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

export default function EvergreenCard() {
    return (
        <div className="evergreen-card lusitana-regular">
            <h2>Evergreen Farms Limited</h2>
            <hr />
            <div className="evergreen-image">
                <img src={EvergreenHome} alt="Evergreen HomePage" />
            </div>
            <div className="evergreen-summary">
                <p><strong>Overview:</strong> Evergreen Farms Limited is a prototype of an agribusiness e-commerce platform. It aims to connect farmers and grocers directly to consumers, eliminating middlemen to reduce food prices and increase revenue for farmers.</p>
                <p><strong>Problem Solved:</strong> Enhances food security by reducing production and transportation costs.</p>
                <p><strong>Key Features:</strong> Market page, Shopping basket, Checkout process, User authentication, and Grocer/Farmer interface.</p>
                <p><strong>Tech Stack:</strong> MERN (MongoDB, Express.js, React.js, Node.js), Redux Toolkit, Bcrypt</p>
            </div>
            <div className="evergreen-links">
                <a href="https://new-evergreen.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Visit Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <div className="code-links">
                    <a href="https://github.com/Mugishaa77/new-evergreen" target="_blank" rel="noopener noreferrer">
                        Frontend Code <FontAwesomeIcon icon={faCode} />
                    </a>
                    <a href="https://github.com/Mugishaa77/my-backend-interface" target="_blank" rel="noopener noreferrer">
                        Backend Code <FontAwesomeIcon icon={faCode} />
                    </a>
                </div>
            </div>
            <a href="/evergreen" className="detail" target="_blank" rel="noopener noreferrer">Detailed Project Description<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg></a>
        </div>
    );
}
