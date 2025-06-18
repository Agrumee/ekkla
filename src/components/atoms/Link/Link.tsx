// atoms/Link/Link.tsx
import { Link as RouterLink } from 'react-router';
import './Link.scss';

interface LinkProps {
    to: string;
    className?: string;
    content: string;
    color?: 'purple' | 'dark-purple' | 'white' | 'light-grey' | 'grey' | 'black' | 'yellow' | 'dark-yellow';
}

export default function Link({ to, className = '', content, color }: LinkProps) {
    const colorClass = color ? `a-link--${color}` : '';

    return (
        <RouterLink to={to} className={`a-link ${colorClass} ${className}`.trim()}>
            {content}
        </RouterLink>
    );
}
