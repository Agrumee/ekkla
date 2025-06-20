import { Link as RouterLink } from 'react-router';
import './Link.scss';
import type { ReactNode } from 'react';

interface LinkProps {
    to: string;
    ariaLabel: string;
    className?: string;
    children: ReactNode;
    color?: 'purple' | 'dark-purple' | 'white' | 'light-grey' | 'grey' | 'black' | 'yellow' | 'dark-yellow';
}

export default function Link({ to, ariaLabel, className = '', children, color }: LinkProps) {
    const colorClass = color ? `a-link--${color}` : '';

    return (
        <RouterLink role='link' to={to} aria-label={ariaLabel} className={`a-link ${colorClass} ${className}`.trim()}>
            {children}
        </RouterLink>
    );
}
