import './EventDetail.scss';
import Heading from '../../atoms/Heading/Heading';
import Tag from '../../atoms/Tag/Tag';
import Tooltip from '../../molecules/Tooltip/Tooltip';
import Paragraph from '../../atoms/Paragraph/Paragraph';

interface Event {
    id: number;
    type: string;
    title: string;
    date: string;
    description: string;
    location: string;
    attendees: number;
    maxAttendees?: number;
    priceMin: number;
    priceMax: number;
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
    const isFree = event.priceMin === 0 && event.priceMax === 0;

    return (
        <article className="o-event-detail">
            <Heading
                level={2}
                className="o-event-detail__title"
                content={event.title}
                color="white"
            />

            <div className="o-event-detail__card">
                <header className="o-event-detail__organizer">
                    <img
                        src={event.organizer.imageUrl}
                        alt={`Photo de ${event.organizer.name}`}
                        className="o-event-detail__organizer-image"
                    />
                    <Heading level={3} className="o-event-detail__organizer-name" content={event.organizer.name} color='white' />
                </header>

                <img
                    src={event.imageUrl}
                    alt={`Illustration de l'événement : ${event.title}`}
                    className="o-event-detail__image"
                />
                <section className="o-event-detail__content">
                    <p className="o-event-detail__meta">
                        <time className="o-event-detail__date">{event.date}</time>
                        <span className="o-event-detail__location">{event.location}</span>
                    </p>

                    <Paragraph className="o-event-detail__description" color='white' content={event.description} size='medium' />

                    <dl className="o-event-detail__data">
                        <div className="o-event-detail__price">
                            <dt>Tarif</dt>
                            <dd>
                                {isFree
                                    ? 'Gratuit'
                                    : `${event.priceMin}€${event.priceMax && event.priceMax !== event.priceMin ? ` – ${event.priceMax}€` : ''}`}
                            </dd>
                        </div>
                        <div className="o-event-detail__participants">
                            <dt>Participants</dt>
                            <dd>
                                {event.attendees}
                                {event.maxAttendees ? ` / ${event.maxAttendees}` : ''} inscrits
                            </dd>
                        </div>
                    </dl>
                </section>

                <footer className="o-event-detail__footer">
                    <div className="o-event-detail__type">
                        <Tooltip
                            type="info"
                            content="Dans un événement limité, votre participation est soumise à la validation du.des organisateurs.rices"
                        >
                            Événement {event.type}
                        </Tooltip>
                    </div>
                    <div className="o-event-detail__tags">
                        {event.tags.map(tag => (
                            <Tag
                                key={tag.id}
                                className="o-event-detail__tag"
                                content={tag.name}
                            />
                        ))}
                    </div>
                </footer>
            </div>
        </article>
    );
}
