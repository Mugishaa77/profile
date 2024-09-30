import React from 'react';
import Recommendation from '../media/Recommendation_Letter-Sally_Mugisha_Wanga.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAward, faUserCheck, faCircleCheck, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';

export default function About() {
       
   
    return (
        <div className="about">
            <div className="intro">
            <h2 className="castoro"><strong>ABOUT ME</strong></h2>
            

            <p className="professional-summary lusitana-regular">
             I am a passionate Software Developer and Data Analyst with a keen interest in
                 Artificial Intelligence(AI).
                 Through working remotely on freelance projects and collaborating with remote teams using agile workflows, I have gained valuable experience in web design.
                  Currently, I am pursuing data analytics at ALX and continuously expanding my 
                  skill set by learning new technologies.
            </p>
            </div>

            <div className="recommendation">
            <h3 className="roboto-flex"> Recommendation <FontAwesomeIcon icon={faAward} /></h3>
            <p className="lusitana-regular">
            I am honored to share a recommendation letter I received from ALX for my role as a Volunteer Mentor in the AICE Program.
            </p>
            <div className="button-container">
      <a href={Recommendation} target="_blank" rel="noopener noreferrer">
        View Recommendation Letter <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
      </a>
    </div>
    

            </div>

            <div className="licenses">
            <h3 className="roboto-flex" >Licenses and Certifications <FontAwesomeIcon icon={faUserCheck} /></h3>
             <ul className="roboto-flex">
                <li><FontAwesomeIcon icon={faCircleCheck} size="xs" />  IBM Artificial Intelligence Fundamentals - July 2024         
                </li>
                <a href="https://www.credly.com/badges/f4106ad3-1774-4dcc-8a69-43db18c82579/linked_in_profile"
                target="_blank"
                title="certificate"
                rel="noopener noreferrer">
                     
                    View Credential<sup><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg></sup></a>


                <li><FontAwesomeIcon icon={faCircleCheck} size="xs" />  Scrum for Operations and Devops Fundamentals - June 2024</li>
                <a href="https://drive.google.com/file/d/1FgFBMpTz75_T_8XLcunz-zMG4bJEuEhK/view?usp=sharing"
                target="_blank"
                title="certificate"
                rel="noopener noreferrer">
                View Credential<sup><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg></sup></a>
             
             <li><FontAwesomeIcon icon={faCircleCheck} size="xs" /> Azure Responsible AI Workshop Completion - March 2024</li>
             <a href="https://www.credly.com/badges/71c9c440-948b-4abc-bdbf-e08d7e01df99/linked_in_profile"
             target="_blank"
             title="certificate"
             rel="noopener noreferrer">View Credential<sup><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg></sup></a>
             </ul>
             
            </div>
            {/* <hr className="eol"/> */}


             <div className="experience">
            <h3 className="roboto-flex">Experience and Involvement <FontAwesomeIcon icon={faWandMagicSparkles} /></h3>
            <ul className="lusitana-regular">
           
  <li><strong>Freelance Projects & Remote Collaboration</strong><br/>
    I have honed my ability to deliver high-quality work while collaborating with remote teams across diverse projects. Utilizing agile methodologies and tools like Jira and Trello, I’ve successfully completed multiple projects, enhancing my skills in self-management, communication, and problem-solving under minimal supervision.
  </li>

  <li><strong>ALX Data Analytics</strong><br/>
    Having graduated from the ALX Data Analytics course, I am proficient in data analysis tools like MS Excel, Google Sheets, MySQL, and PowerBI. My training has equipped me with the ability to extract actionable insights from complex datasets, enabling data-driven decision-making.
  </li>

  <li><strong>Leadership & Mentorship at ALX</strong><br/>
    As a volunteer mentor for the AICE program at ALX, I helped guide aspiring data analysts, enhancing my leadership and mentoring abilities while positively impacting others' learning journeys.
  </li>

  <li><strong>Agile and DevOps Expertise</strong><br/>
    I hold certifications in SCRUM for Operations and DevOps Fundamentals, which have provided me with a strong foundation in agile practices. My work on agile teams has made me an effective contributor to high-performing projects, ensuring streamlined processes and timely delivery.
  </li>

  <li><strong>Tech Writer & AI Advocate</strong><br/>
    I share my tech journey on Medium, documenting valuable insights and contributing to the tech community. Additionally, attending Microsoft’s Responsible AI Workshop and IBM’s AI training has deepened my understanding of ethical AI practices, preparing me for responsible AI development.
  </li>

</ul>

              
           
            </div> 

            <div className="technologies">
            <h3 className="roboto-flex"> Skills and Technologies</h3>
            <div className="icons">
                <i className="devicon-mongodb-plain-wordmark colored"></i>
                <i className="devicon-express-original-wordmark"></i>
                <i className="devicon-react-original-wordmark colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-css3-plain-wordmark colored"></i>
                <i className="devicon-azuresqldatabase-plain colored"></i>
                <i className="devicon-git-plain-wordmark colored"></i>
                <i className="devicon-jira-plain-wordmark colored"></i>
                <i className="devicon-trello-plain-wordmark colored"></i>
                <i className="devicon-bootstrap-plain-wordmark colored"></i>
                <i className="devicon-azure-plain-wordmark colored"></i>
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-python-plain-wordmark colored"></i>
                <i className="devicon-redux-original colored"></i>
                <i className="devicon-npm-original-wordmark colored"></i>
                <i className="devicon-canva-original colored"></i>
                <i className="devicon-openapi-plain-wordmark colored"></i>
                <i className="devicon-axios-plain-wordmark"></i>
                <i className="devicon-chrome-plain-wordmark colored"></i>
            </div>

            <div className="outro">
            <h3 className="roboto-flex">Contact</h3>
            <p className="lusitana-bold">
                Feel free to <a href="mailto:Sallywanga2016@gmail.com">email me</a> or connect with me on <a href="https://www.linkedin.com/in/swugisha/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
            </div>
            <div className="redirect">
<h3 className="roboto-flex">Projects</h3>
<a href="/projects" className="roboto-flex" title="Projects Page">
Check Out My Projects
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>
            </div>

            </div>

            
          
        </div>
    );
}

