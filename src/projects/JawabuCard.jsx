import jawabuOne from '../media/jawabu_one.png';
import jawabuTwo from '../media/jawabu_two.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

export default function JawabuCard () {
return (
    <div className="atlas-card lusitana-regular">
    <h2>Jawabu Events</h2>
    <hr />
    <div className="atlas-images">
        <img src={jawabuOne} alt="Atlas Landing Page Top" />
        <img src={jawabuTwo} alt="Atlas Landing Page Bottom" />
    </div>
    <div className="atlas-summary">
        <p><strong>Overview:</strong> A website that creates an online presence for the company and
        allows the user to book for an event in advance. This is the draft of the expected end result</p>
        <p><strong>Key Features:</strong> Booking Page, Locations, List of Services, Contact Page and Gallery.</p>
        <p><strong>Tech Stack:</strong>(Front-End) React.js, Html, Css, Bootstrap</p>
    </div>
    <div className="atlas-links">
        <a href="https://jawabu-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
            Visit Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <div className="code-links">
            <a href="https://github.com/Mugishaa77/jawabu" target="_blank" rel="noopener noreferrer">
                Frontend Code <FontAwesomeIcon icon={faCode} />
            </a>
           
        </div>
    </div>
</div>
);
}