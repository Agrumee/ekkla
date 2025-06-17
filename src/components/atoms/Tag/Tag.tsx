import "./Tag.scss";

interface TagProps {
    content: string;
    className?: string;
    clickable?: boolean;
    selected?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Tag({
    content,
    className = "",
    clickable = false,
    selected = false,
    onClick,
}: TagProps) {
    const classes = [
        "a-tag",
        clickable && "a-tag--clickable",
        selected && "a-tag--selected",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (clickable) {
        return (
            <button
                type="button"
                className={'a-tag ' + classes}
                onClick={onClick}
                aria-pressed={selected}
            >
                {content}
            </button>
        );
    }

    return <span className={classes}>{content}</span>;
}
