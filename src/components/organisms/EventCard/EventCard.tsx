import Icon from '../../atoms/Icon/Icon';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Tag from '../../atoms/Tag/Tag';
import Link from '../../atoms/Link/Link';
import './EventCard.scss';

interface EventCardProps {
    id: number;
    title: string;
    date: string;
    description?: string;
    imageUrl?: string;
    isFavorite?: boolean;
    participantsCount?: number;
    tags?: string[];
}

export default function EventCard({
    id,
    title,
    description,
    imageUrl,
    isFavorite = false,
    participantsCount,
    tags,
}: EventCardProps) {
    const displayedTags = tags?.slice(0, 1);
    const remainingTagCount = tags && tags.length > 1 ? tags.length - 1 : 0;

    const truncatedDescription = description
        ? description.split(' ').slice(0, 20).join(' ') + (description.split(' ').length > 20 ? ' [...]' : '')
        : '';

    return (
        <div className="event-card">
            {imageUrl && (
                <div className="event-card__image">
                    <Icon
                        name="Star"
                        onClick={() => console.log('ici faudra update le state de isFavorite')}
                        size={24}
                        color="yellow"
                        className={`event-card__favorite ${isFavorite ? 'filled' : 'outlined'}`}
                    />
                    <img src={imageUrl} alt={title} />
                </div>
            )}

            <div className="event-card__content">
                <div className="event-card__header">
                    <h3 className="event-card__title">{title}</h3>
                </div>

                {truncatedDescription && (
                    <Paragraph className="event-card__description" content={truncatedDescription} />
                )}

                <Link
                    to={`/events/${id}`}
                    className="event-card__more-link"
                    content='Voir plus'
                    color='white'
                />

                <div className="event-card__footer">
                    {participantsCount !== undefined && (
                        <span className="event-card__participants">
                            {participantsCount} participant{participantsCount > 1 ? 's' : ''}
                        </span>
                    )}

                    {displayedTags && (
                        <div className="event-card__tags">
                            {displayedTags.map((tag, index) => (
                                <Tag key={index} content={tag} />
                            ))}
                            {remainingTagCount > 0 && (
                                <Tag content={`+${remainingTagCount}`} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
