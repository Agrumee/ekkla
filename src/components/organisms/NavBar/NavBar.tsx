import Heading from '../../atoms/Heading/Heading';
import Icon from '../../atoms/Icon/Icon';
import MenuPanel from '../../organisms/MenuPanel/MenuPanel';
import { Link as RouterLink } from 'react-router';
import { useState } from 'react';
import './NavBar.scss';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="o-nav-bar">
            <div className="o-nav-bar__left">
                <Icon name="Menu" size={32} color="white" onClick={() => setMenuOpen(true)} />
                <Heading level={1} content='EKKLA APP' color='white' />
            </div>

            <div className="o-nav-bar__right">
                <RouterLink to={`/notifications`} className='notifications__redirection' >
                    <Icon name="Bell" size={24} color="white" />
                </RouterLink>
                <RouterLink to={`/profile`} className='profile__redirection' >
                    <Icon name="User" size={24} color="white" />
                </RouterLink>
            </div>

            <MenuPanel isOpen={menuOpen} onClose={() => setMenuOpen(false)} position="left">
                {/* TODO : modifier le contenu du menu */}
                <a href="/home">Accueil</a>
                <a href="/profile">Profil</a>
                <a href="/notifications">Notifications</a>
                <button onClick={() => console.log('Se déconnecter')}>Se déconnecter</button>
            </MenuPanel>
        </nav>
    );
}
