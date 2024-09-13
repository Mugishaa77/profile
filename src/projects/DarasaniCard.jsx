import DarasaniOne from '../media/darasani_one.png';
import DarasaniTwo from '../media/darasani_two.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

export default function DarasaniCard () {
    return (
        <div className="atlas-card lusitana-regular">
            <h2>Darasani Hub</h2>
            <hr />
            <div className="atlas-images">
                <img src={DarasaniOne} alt="Atlas Landing Page Top" />
                <img src={DarasaniTwo} alt="Atlas Landing Page Bottom" />
            </div>
            <div className="atlas-summary">
                <p><strong>Overview:</strong> A website that serves as a platform to connect tutors and students, 
                allowing one to make a preferred selection.</p>
                <p><strong>Key Features:</strong> <strong style={{color: 'blue'}}>Accessibility Features</strong>. Also Includes a Find Tutor Page, Become a Tutor,
                Library of materials and User Authentification.</p>
                <p><strong>Tech Stack:</strong>(Front-End) React.js, Html, Css, Bootstrap and Tailwind CSS</p>
            </div>
            <div className="atlas-links">
                <a href="https://sal-darasani.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Visit Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <div className="code-links">
                    <a href="https://github.com/Mugishaa77/sal-darasani" target="_blank" rel="noopener noreferrer">
                        Frontend Code <FontAwesomeIcon icon={faCode} />
                    </a>
                   
                </div>
            </div>
        </div>
    );
}