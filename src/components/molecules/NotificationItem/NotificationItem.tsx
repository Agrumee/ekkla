import { Route, Router } from 'react-router';
import { Link as RouterLink } from 'react-router';
import './NotificationItem.scss';

interface NotificationItemProps {
    message: string;
    imageUrl: string;
    alt: string;
    eventId: string;
}

export default function NotificationItem({ message, imageUrl, alt = "Notification image", eventId }: NotificationItemProps) {
    return (
        <RouterLink to={`/events/${eventId}`} className="m-notification">
            <img src={imageUrl} alt={alt} className="m-notification__image" />
            <p className="m-notification__message">{message}</p>
        </RouterLink>
    );
}
