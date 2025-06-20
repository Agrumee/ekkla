import './EventFiltersPanel.scss';
import { useEffect } from 'react';

interface EventFiltersPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EventFiltersPanel({ isOpen, onClose }: EventFiltersPanelProps) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [isOpen]);

    return (
        <div className={`o-filter-panel ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>✕</button>
            {/* TODO update with filters and sorts */}
        </div>
    );
}
