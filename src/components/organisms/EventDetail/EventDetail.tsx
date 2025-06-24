import './EventDetail.scss';
import Heading from '../../atoms/Heading/Heading';
import Tag from '../../atoms/Tag/Tag';

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    location: string;
    attendees: number;
    imageUrl: string;
    organizer: {
        name: string;
        imageUrl: string;
    };
    tags: {
        id: number;
        name: string;
    }[];
}

export default function EventDetail({ event }: { event: Event }) {
    return (
        <div className="o-event-detail">
            <Heading level={2} className="o-event-detail__title" content={event.title} color="white" />

            <div className="o-event-detail__card">
                <header className="o-event-detail__organizer">
                    <img
                        src={event.organizer.imageUrl}
                        alt={`Photo de ${event.organizer.name}`}
                        className="o-event-detail__organizer-image"
                    />
                    <span className="o-event-detail__organizer-name">{event.organizer.name}</span>
                </header>

                <img
                    src={event.imageUrl}
                    alt={`Illustration de l'événement : ${event.title}`}
                    className="o-event-detail__image"
                />

                <div className="o-event-detail__content">
                    <div className='o-event-detail__meta'>
                        <span className="o-event-detail__date">{event.date}</span>
                        <span className="o-event-detail__location">{event.location}</span>
                    </div>
                    <p className="o-event-detail__description">{event.description}</p>
                </div>

                <footer className="o-event-detail__footer">
                    {event.tags.map(tag => (
                        <Tag key={tag.id} className="o-event-detail__tag" content={tag.name} />
                    ))}
                </footer>
            </div>
        </div >
    );
}
