import "./Button.css";

const button = ({id, text, action}) => {
  const handleAction = (evento) => {
    action(evento);
  }
  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}

export default button