import "./Button.css"

export default function Button({ onClick, buttonValue}) {
    return (
      <button  onClick={onClick}>
        {buttonValue}
      </button>
    );
  }