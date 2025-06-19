import Heading from '../../atoms/Heading/Heading';
import Icon from '../../atoms/Icon/Icon';
import { Link as RouterLink } from 'react-router';
import './NavBar.scss';

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__left">
                <Icon name="Menu" size={24} color="white" />
                <Heading level={1} content='EKKLA APP' color='white' />
            </div>

            <div className="nav-bar__right">
                <RouterLink to={`/notifications`} className='notifications__redirection' >
                    <Icon name="Bell" size={24} color="white" />
                </RouterLink>
                <RouterLink to={`/profile`} className='profile__redirection' >
                    <Icon name="User" size={24} color="white" />
                </RouterLink>
            </div>
        </nav>
    );
}
