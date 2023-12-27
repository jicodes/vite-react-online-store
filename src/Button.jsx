import "./Button.css";

function Button({ type = "button", visual = "default", onClick, children, className }) {
  let buttonClass;

  switch (visual) {
    case "link":
      buttonClass = "link-button";
      break;
    case "button":
      buttonClass = "normal-button";
      break;
    default:
      buttonClass = "default-button";
  }

  return (
    <button type={type} className= {`${buttonClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;