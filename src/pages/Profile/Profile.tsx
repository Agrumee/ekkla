import Button from "../../components/atoms/Button/Button";
import Heading from "../../components/atoms/Heading/Heading";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import EventCard from "../../components/organisms/EventCard/EventCard";

import './Profile.scss';

export default function Profile() {
    const user = {
        name: "Jane Doe",
        pronouns: "elle",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
        description:
            "Description de l'utilisateur : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };

    return (
        <div className="p-profile">
            <div className="p-profile__header">
                <Heading level={2} content={user.name.toUpperCase()} color="white" className="p-profile__title" />
                <span>-</span>
                <Heading level={3} content={user.pronouns.toUpperCase()} color="light-grey" className="p-profile__pronouns" />
            </div>
            <section className="p-profile__user">
                <div className="p-profile__image">
                    <img src={user.image} alt={`Photo de profil de ${user.name}`} />
                </div>
                <Paragraph className="p-profile__description" content={user.description} />
            </section>

            <section className="p-profile__events">
                <Heading level={3} content="Je participe" color="white" className="p-profile__section-title" />

                <EventCard
                    id={'1'}
                    title="Pique-Nique"
                    date="2025-06-19"
                    description="Description de l'événement : je teste les descriptions de plus de 20 mots pour voir si le système de troncature fonctionne correctement. Il faut que ça coupe au bout de 20 mots et ajoute ' [...]' à la fin pour indiquer qu'il y a plus de texte."
                    imageUrl="https://www.pereolive.com/wp-content/uploads/2021/06/pic-nic-au-pied-dun-arbre-pere-olive--1024x683.jpg"
                    isFavorite={true}
                    participantsCount={[10, 50]}
                    tags={['#Racisé.es', '#FemmesEtMinoritésDeGenre']}
                />

                <Button
                    content="Archives"
                    variant="primary"
                    className="p-profile__button"
                    onClick={() => console.log("archives des événements auxquels j'ai participé")}
                />
            </section>

            <section className="p-profile__events">
                <Heading level={3} content="J'organise" color="white" className="p-profile__section-title" />
                <span className="p-profile__empty">Aucun événement à venir</span>
                <Button
                    content="Archives"
                    variant="primary"
                    className="p-profile__button"
                    onClick={() => console.log("archives des événements que j'ai organisés")}
                />
            </section>
        </div>
    );
}
