import AtlasCard from "../projects/AtlasCard";
import EvergreenCard from "../projects/EvergreenCard";
import DarasaniCard from "../projects/DarasaniCard";

export default function Projects () {
    return (
        <div className="projects">
        <ul>
          <li>
            <AtlasCard />
          </li>
          <li>
            <EvergreenCard />
          </li>
          <li>
            <DarasaniCard />
          </li>
        </ul>
      </div>
      
    );
}