import { useState } from 'react';
import SearchBar from '../../components/molecules/SearchBar/SearchBar';
import EventCard from '../../components/organisms/EventCard/EventCard';
import Heading from '../../components/atoms/Heading/Heading';

import './Home.scss';

export default function Home() {
    const [searchParams, setSearchParams] = useState({ name: '', location: '' });

    const handleSearch = ({ name, location }: { name: string; location: string }) => {
        setSearchParams({ name, location });
        console.log('Params de recherche :', name, location);
        // 👉 plus tard : déclencher un appel API ou filtrer une liste locale ici
    };

    return (
        <div className="p-home">
            <SearchBar onSearch={handleSearch} />
            <Heading level={2} className='p-home__title' content='19 mai 2025' color='white' />


            <section className="p-home__events">
                {/* Simule un seul événement ici — ensuite, on itérera sur une vraie liste */}
                <EventCard
                    id={'1'}
                    title='Pique-Nique'
                    date='2025-06-19'
                    description="Description de l'événement : je teste les descriptions de plus de 20 mots pour voir si le système de troncature fonctionne correctement. Il faut que ça coupe au bout de 20 mots et ajoute ' [...]' à la fin pour indiquer qu'il y a plus de texte."
                    imageUrl='https://www.pereolive.com/wp-content/uploads/2021/06/pic-nic-au-pied-dun-arbre-pere-olive--1024x683.jpg'
                    isFavorite={true}
                    participantsCount={[10, 50]}
                    tags={['#Racisé.es', '#FemmesEtMinoritésDeGenre']}
                />
            </section>
        </div>
    );
}
