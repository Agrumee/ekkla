import './MenuPanel.scss';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    position?: 'left' | 'right'; // pour permettre un affichage depuis la gauche ou la droite
}

export default function MenuPanel({
    isOpen,
    onClose,
    children,
    position = 'left',
}: Props) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <div className={`o-menu-panel ${isOpen ? 'open' : ''} ${position}`}>
            <div className="o-menu-panel__overlay" onClick={onClose} />
            <aside className="o-menu-panel__panel">
                <button className="o-menu-panel__close" onClick={onClose}>✕</button>
                {children}
            </aside>
        </div>
    );
}
