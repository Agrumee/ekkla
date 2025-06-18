import { useEffect, useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Heading from '../../atoms/Heading/Heading';
import './TooltipInfo.scss';

interface TooltipInfoProps {
    content: string;
    heading: string;
}

export default function TooltipInfo({ content, heading }: TooltipInfoProps) {
    const [visible, setVisible] = useState(false);

    const toggleTooltip = () => setVisible((v) => !v);

    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => setVisible(false), 20000);
            return () => clearTimeout(timeout);
        }
    }, [visible]);

    return (
        <div className="m-tooltip-info">
            <div className="tooltip-header">
                <Heading level={4} content={heading} />
                <Icon
                    name="Info"
                    color="white"
                    size={28}
                    onClick={toggleTooltip}
                    aria-label="Afficher l'information"
                />
            </div>
            {visible && (
                <span className="tooltip-text" role="tooltip">
                    {content}
                </span>
            )}
        </div>
    );
}
