import './Tooltip.scss';
import { useEffect, useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import type { ReactNode } from 'react';
import Button from '../../atoms/Button/Button';

interface TooltipProps {
    type?: 'help' | 'info';
    content: string;
    children: ReactNode;
}

export default function Tooltip({ type = 'info', content, children }: TooltipProps) {
    const [visible, setVisible] = useState(false);

    const toggleTooltip = () => {
        setVisible((v) => !v);
    };

    useEffect(() => {
        if (type === 'info' && visible) {
            const timeout = setTimeout(() => setVisible(false), 1000000); // 10 sec
            return () => clearTimeout(timeout);
        }
    }, [visible, type]);

    return (
        <div className="m-tooltip">
            {visible && type === 'info' && (
                <span className={`m-tooltip-text m-tooltip-text--${type}`}>
                    {content}
                </span>
            )}
            <div className="m-tooltip-header">
                {children}
                <Button variant='icon' className="m-tooltip-button" onClick={toggleTooltip}>
                    <Icon
                        className="m-tooltip-icon"
                        name={type === 'help' ? 'CircleHelp' : 'Info'}
                        color="white"
                        size={20}
                    />
                </Button>
            </div>
            {visible && type === 'help' && (
                <span className={`m-tooltip-text m-tooltip-text--${type}`}>
                    {content}
                </span>
            )}
        </div>
    );
}
