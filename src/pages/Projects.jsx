import AtlasCard from "../projects/AtlasCard";
import EvergreenCard from "../projects/EvergreenCard";
import DarasaniCard from "../projects/DarasaniCard";
import JawabuCard from '../projects/JawabuCard';

export default function Projects () {
    return (
        <div className="projects">
        <ul>
          <li>
            <JawabuCard/>
          </li>
        <li>
            <DarasaniCard />
          </li>
          <li>
            <AtlasCard />
          </li>
          <li>
            <EvergreenCard />
          </li>
          
        </ul>
      </div>
      
    );
}