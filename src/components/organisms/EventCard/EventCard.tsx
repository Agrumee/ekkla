import Icon from '../../atoms/Icon/Icon';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Tag from '../../atoms/Tag/Tag';
import { Link as RouterLink } from 'react-router';
import { useEffect, useState } from 'react';

import './EventCard.scss';

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
        <div id={id} className="event-card">
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
                    {participantsCount !== undefined && (
                        <span className="event-card__participants">
                            {participantsCount[0]}/{participantsCount[1]}
                        </span>
                    )}
                </div>
            )}
            <RouterLink to={`/events/${id}`} className='event-card__redirection' >
                <div className="event-card__content">
                    <div className="event-card__header">
                        <h3 className="event-card__title">{title}</h3>
                    </div>

                    {truncatedDescription && (
                        <Paragraph className="event-card__description" content={truncatedDescription} aria-label={description} />
                    )}


                    <div className="event-card__footer">


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
            </RouterLink>
        </div>


    );
}
