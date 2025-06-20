import Icon from '../../atoms/Icon/Icon';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Tag from '../../atoms/Tag/Tag';
import { useEffect, useState } from 'react';
import './EventCard.scss';
import Link from '../../atoms/Link/Link';

interface EventCardProps {
    id: string;
    title: string;
    date: string;
    description?: string;
    imageUrl?: string;
    isFavorite?: boolean;
    participantsCount?: [number, number];
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
    const [truncatedDescription, setTruncatedDescription] = useState('');

    const displayedTags = tags?.slice(0, 1);
    const remainingTagCount = tags && tags.length > 1 ? tags.length - 1 : 0;

    useEffect(() => {
        if (!description) return;

        const updateTruncation = () => {
            const wordLimit = window.innerWidth >= 660 ? 60 : 10;
            const words = description.split(' ');
            const isTruncated = words.length > wordLimit;

            const truncated = words.slice(0, wordLimit).join(' ') + (isTruncated ? ' [...]' : '');
            setTruncatedDescription(truncated);
        };

        updateTruncation(); // initial
        window.addEventListener('resize', updateTruncation);

        return () => window.removeEventListener('resize', updateTruncation);
    }, [description]);

    return (
        <div id={id} className="o-event-card">
            {imageUrl && (
                <div className="o-event-card__image">
                    <Icon
                        name="Star"
                        onClick={() => console.log('ici faudra update le state de isFavorite')}
                        size={24}
                        color="yellow"
                        className={`o-event-card__favorite ${isFavorite ? 'filled' : 'outlined'}`}
                    />
                    <img src={imageUrl} alt={title} />
                    {participantsCount !== undefined && (
                        <span className="o-event-card__participants">
                            {participantsCount[0]}/{participantsCount[1]}
                        </span>
                    )}
                </div>
            )}
            <Link to={`/events/${id}`} ariaLabel="Accéder au détail de l'événement" className='o-event-card__redirection' >
                <div className="o-event-card__content">
                    <div className="o-event-card__header">
                        <h3 className="o-event-card__title">{title}</h3>
                    </div>

                    {truncatedDescription && (
                        <Paragraph className="o-event-card__description" content={truncatedDescription} aria-label={description} />
                    )}


                    <div className="o-event-card__footer">


                        {displayedTags && (
                            <div className="o-event-card__tags">
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
            </Link>
        </div>


    );
}
