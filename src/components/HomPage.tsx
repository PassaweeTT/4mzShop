import News from "./News";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {

    const onLogoClick = () => {
        window.open("https://www.youtube.com/watch?v=7ElD4fiS-WU", "_blank");
    }
    return (
        <div>
            <h1 className="text-logo" onClick={onLogoClick}>4mzShop</h1>

            <div style={{ textAlign: "right" }} className="row">
                <button className="btn-primary btnGetSystemTime">Get System Time</button>
                <button className="btn-primary btnCart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</button>
                <button className="btn-primary btnProfile"><FontAwesomeIcon icon={faUser} /> Profile</button>
            </div>

            <div className="row panel-frame">
                <News />
            </div>
        </div>
    );
};

export default HomePage;