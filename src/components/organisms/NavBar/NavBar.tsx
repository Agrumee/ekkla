import Heading from '../../atoms/Heading/Heading';
import Icon from '../../atoms/Icon/Icon';
import MenuPanel from '../../organisms/MenuPanel/MenuPanel';
import Link from '../../atoms/Link/Link';
import { useState } from 'react';
import './NavBar.scss';
import Button from '../../atoms/Button/Button';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="o-nav-bar">
            <div className="o-nav-bar__left">
                <Button variant='icon' onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu" className='menu__btn'>
                    <Icon name="Menu" size={32} color="white" />
                </Button>
                <Link to={`/`} ariaLabel="Accéder à l'accueil" className='home__redirection' >
                    <Heading level={1} content='EKKLA APP' color='white' />
                </Link>
            </div>

            <div className="o-nav-bar__right">
                <Link to={`/notifications`} ariaLabel="Accéder aux notifications" className='notifications__redirection' >
                    <Icon name="Bell" size={24} color="white" />
                </Link>
                <Link to={`/profile`} ariaLabel="Accéder à mon profil" className='profile__redirection' >
                    <Icon name="User" size={24} color="white" />
                </Link>
            </div>

            <MenuPanel isOpen={menuOpen} onClose={() => setMenuOpen(false)} position="left">
                {/* TODO : modifier le contenu du menu */}
                <a href="/">Accueil</a>
                <a href="/profile">Profil</a>
                <a href="/notifications">Notifications</a>
                <button onClick={() => console.log('Se déconnecter')}>Se déconnecter</button>
            </MenuPanel>
        </nav>
    );
}
