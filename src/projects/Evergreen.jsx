import EvergreenHome from '../media/evergreen_home.png';

export default function Evergreen () {
    return (
        <div className="evergreen">
            <h1>Evergreen Farms Limited</h1>
            <div className="evergreen-home">
            <img src={EvergreenHome} alt="Evergreen HomePage" />
            </div>
        </div>
    );
}