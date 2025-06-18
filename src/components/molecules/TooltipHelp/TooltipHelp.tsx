import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Label from '../../atoms/Label/Label';
import './TooltipHelp.scss';

interface TooltipHelpProps {
    content: string;
    label: string;
}

export default function TooltipInfo({
    content,
    label,
}: TooltipHelpProps) {
    const [visible, setVisible] = useState(false);

    const toggleTooltip = () => setVisible((v) => !v);

    return (
        <div className="m-tooltip-help">
            <div>
                <Label content={label} />
                <Icon name="CircleHelp" color="white" size={28} onClick={toggleTooltip} />
            </div>
            {visible && <span className="tooltip-text">{content}</span>}
        </div>
    );
}
