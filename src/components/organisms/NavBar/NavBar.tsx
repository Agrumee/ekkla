import Heading from '../../atoms/Heading/Heading';
import Icon from '../../atoms/Icon/Icon';
import './NavBar.scss';

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__left">
                <Icon name="Menu" size={24} color="white" />
                <Heading level={1} content='EKKLA APP' color='white' />
            </div>


            <div className="nav-bar__right">
                <Icon name="Bell" size={24} color="white" />
                <Icon name="User" size={24} color="white" />
            </div>
        </nav>
    );
}
