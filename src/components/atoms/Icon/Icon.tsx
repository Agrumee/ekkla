import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import './Icon.scss'

interface IconProps extends ComponentProps<LucideIcon> {
    name: keyof typeof Icons;
    className?: string;
    color?: 'purple' | 'dark-purple' | 'white' | 'light-grey' | 'grey' | 'black' | 'yellow' | 'dark-yellow';
    size?: number;
}

export default function Icon({
    name,
    size = 24,
    className = '',
    color = 'black',
}: IconProps) {
    const LucideIcon = Icons[name] as LucideIcon;

    if (!LucideIcon) {
        console.warn(`Lucide icon "${name}" not found.`);
        return null;
    }

    return (
        <LucideIcon
            size={size}
            className={`a-icon ${color} ${className}`}
        />
    );
}
