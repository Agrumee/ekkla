import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import './SearchBar.scss';

interface SearchBarProps {
    onSearch: (query: { name: string; location: string }) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleBlur = () => {
        if (name.trim() || location.trim()) {
            onSearch({ name, location });
            console.log('Recherche effectuée avec:', { name, location });
        }
    };

    return (
        <form className="m-search-bar" onSubmit={(e) => e.preventDefault()}>
            <div className="search-input">
                <Icon name="Search" size={20} color="black" />
                <input
                    type="text"
                    placeholder="Rechercher un événement"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleBlur}
                    aria-label="Recherche par nom"
                />
            </div>

            <div className="localisation-input">
                <Icon name="MapPin" size={20} color="black" />
                <input
                    type="text"
                    placeholder="Lieu (ex : Nantes, France)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onBlur={handleBlur}
                    aria-label="Recherche par lieu"
                />
            </div>
        </form>
    );
}
