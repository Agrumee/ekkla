import EventDetail from '../../components/organisms/EventDetail/EventDetail';
import './EventDetailPage.scss'

export default function EventDetailPage() {
    const event = {
        id: 1,
        type: "limité",
        title: "Atelier Poterie",
        date: "2023-10-01",
        description: "Bonjour ! J'ai créé cet événement pour rencontrer de nouvelles personnes qui partagent un intérêt pour tout ce qui est activités manuelles. J'ai hâte de vous y voir ! J'aimerais apprendre à faire de la poterie et je pense que ce serait super de le faire ensemble. J'ai réservé un atelier pour nous, alors n'hésitez pas à vous inscrire !",
        location: "Sample Location",
        attendees: 3,
        maxAttendees: 15,
        priceMin: 30,
        priceMax: 30,
        imageUrl: 'https://images.unsplash.com/photo-1478234170285-53301bcf2461?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        organizer: {
            name: "John Doe",
            imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        tags: [
            { id: 1, name: "Sample Tag" },
            { id: 2, name: "Another Tag" },
            { id: 3, name: "More Tags" }
        ]
    };

    return (
        <div className="p-event-detail-page">
            <EventDetail event={event} />;
        </div>
    )
}
