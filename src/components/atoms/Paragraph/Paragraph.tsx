import "./Paragraph.scss";

interface ParagraphProps {
  content: string;
  size?: 'tiny' | 'small' | 'medium' | 'big';
  color?: 'black' | 'white';
  className?: string;
}

export default function Paragraph({ content, size = 'small', color, className }: ParagraphProps) {
  return (
    <p className={`a-paragraph ${size} ${color} ${className}`}>
      {content}
    </p>
  );
}