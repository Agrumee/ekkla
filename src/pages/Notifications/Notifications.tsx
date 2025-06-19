import Heading from '../../components/atoms/Heading/Heading';
import NotificationItem from '../../components/molecules/NotificationItem/NotificationItem';
import './Notifications.scss';

export default function Notifications() {
    return (
        <div className="p-notifications">
            <Heading level={2} className='p-notifications__title' content='NOTIFICATIONS' color='white' />
            <section className='p-notifications__section'>
                <Heading level={3} className='p-notifications__date' content='19 mai 2025' color='white' />
                <NotificationItem
                    message="Vous avez un nouveau message" imageUrl='https://www.pereolive.com/wp-content/uploads/2021/06/pic-nic-au-pied-dun-arbre-pere-olive--1024x683.jpg' alt='event' eventId='1' />
            </section>
        </div>
    );
}