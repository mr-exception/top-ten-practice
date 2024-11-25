interface IProps {
  label: string;
  onClick: () => void;
}
export default function Button(props: IProps) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
