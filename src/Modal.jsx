import Button from "./Button";
import { useId, useState } from "react";

import "./Modal.css";

function Modal({ modalRef, setSubscriber }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onSubscribe = (event, email) => {
    event.preventDefault();
    
    if (!email) {
      setError("Email cannot be empty");
      return;
    }

    setSubscriber(email);
    modalRef.current.close();
  };

  const onModalClose = () => {
    setEmail("");
    setError("");
    modalRef.current.close();
  };

  return (
    <dialog ref={modalRef} className="modal">
      <form onSubmit={(event) => onSubscribe(event, email)} className="subscribe-form">
        <h3 className="subscribe-title">Subscribe to our Newsletter!</h3>
        <label
          htmlFor={`${id}-email`}
          className="form-label required-indicator"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          value={email}
          id={`${id}-email`}
          placeholder="Enter your email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-field"
        />
        <p className="field-error-message">{error}</p>

        <div className="subscribe-button-group">
          <Button type="submit" visual="link" className="subscribe-submit">
            Subscribe
          </Button>
          <Button
            type="button"
            visual="button"
            onClick={() => onModalClose()}
            className="subscribe-modal-close"
          >
            Cancel
          </Button>
        </div>
      </form>
    </dialog>
  );
}

export default Modal;