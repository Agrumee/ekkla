import "./Label.scss";

interface LabelProps {
  content: string;
  color?: "black" | "white";
}

export default function Label({ content, color }: LabelProps) {
  return <label className={`label -${color}`}>{content}</label>;
}