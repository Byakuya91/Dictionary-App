// ? imports
import "./ErrorMessage.css";

const ErrorMessage = ({ message, clearError }) => {
  if (!message) return null;

  return (
    <div className="error-container">
      <p className="error-emoji">😕</p>
      <p className="error-message">{message}</p>
      <button onClick={clearError}>Dismiss</button>
    </div>
  );
};

export default ErrorMessage;
