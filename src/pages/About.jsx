import React from 'react';
import Recommendation from '../media/Recommendation_Letter-Sally_Mugisha_Wanga.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAward, faUserCheck, faCircleCheck, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import Services from '../components/Services';
export default function About() {
       

   
    return (
        <div className="about">
            <div className="intro">
            <p className="professional-summary cormorant-regular">
            Skilled in JavaScript, front-end frameworks, and API integration, I specialize in
             building responsive, user-friendly, and scalable web applications. I collaborate on 
             open-source projects and work with remote teams using agile workflows to create smooth 
             and high-performing digital experiences. My focus is on UI/UX, performance optimization, 
             and clean, maintainable code.
            </p>
            </div>

            <div>
            <Services />
            </div>

                 
          
        </div>
    );
}

