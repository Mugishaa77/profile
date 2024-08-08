import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Join from './../media/join.jpeg';
import Build from './../media/build.jpeg';
import Connect from './../media/connect.jpeg';
import {faHeart, faPhone} from '@fortawesome/free-solid-svg-icons'
export default function Contact () {
    return (
        <div className="contact">
           
            
            
          <div className="thankyou">
          <img src={Join}/>
            <img src={Build}/>
           <img src={Connect}/>
          </div>
          <p className="lusitana-bold ty">
                Thankyou for taking time to go though my profile 
                <span> <FontAwesomeIcon icon={faHeart} beat size="sm" style={{color: "#fea498",}} /></span>
            </p>
        </div>
    );
}