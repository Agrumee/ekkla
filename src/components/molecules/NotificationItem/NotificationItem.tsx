
import './NotificationItem.scss';
import Link from '../../atoms/Link/Link';

interface NotificationItemProps {
    message: string;
    imageUrl: string;
    alt: string;
    eventId: string;
}

export default function NotificationItem({ message, imageUrl, alt = "Notification image", eventId }: NotificationItemProps) {
    return (
        <Link to={`/events/${eventId}`} ariaLabel="Accéder au détail de l'événement" className="m-notification">
            <img src={imageUrl} alt={alt} className="m-notification__image" />
            <p className="m-notification__message">{message}</p>
        </Link>
    );
}
