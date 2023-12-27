import { useId, useState } from "react";

import Button from "./Button";

import "./MainCatering.css";

function MainCatering() {
  const id = useId();

  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    message: "",
    selectedEvent: "",
    spicifiedEvent: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [cateringData, setCateringData] = useState({});

  const handleFieldChange = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  function checkIsNameValid(name) {
    return !!name;
  }

  function checkIsEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function checkIsPhoneValid(phone) {
    const phoneRegex = /^\d{10}$/;
    const trimmedPhone = phone.replace(/[-() ]/g, "").trim();
    return phoneRegex.test(trimmedPhone);
  }

  const [isNameValid, setIsNameValid] = useState(true);
  const nameError = isNameValid ? "" : "Name cannot be empty";

  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailError = isEmailValid ? "" : "Invalid email address";

  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const phoneError = isPhoneValid ? "" : "Invalid phone number";

  const [isFormValid, setIsFormValid] = useState(false);
  const [isOtherEvent, setIsOtherEvent] = useState(false);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    handleFieldChange("selectedEvent", selectedValue);

    if (selectedValue === "other") {
      setIsOtherEvent(true);
    }

    if (!isOtherEvent) {
      handleFieldChange("spicifiedEvent", "");
      handleFieldChange("selectedEvent", selectedValue);
    }
  };

  const handleOtherInputChange = (event) => {
    const spicifiedValue = event.target.value;
    handleFieldChange("spicifiedEvent", spicifiedValue);
  };

  function validateForm() {
    const isNameValid = checkIsNameValid(formState.name);
    const isEmailValid = checkIsEmailValid(formState.email);
    const isPhoneValid = checkIsPhoneValid(formState.phone);

    setIsNameValid(isNameValid);
    setIsEmailValid(isEmailValid);
    setIsPhoneValid(isPhoneValid);

    return isNameValid && isEmailValid && isPhoneValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isFormValid = validateForm();
    setIsFormValid(isFormValid);

    if (isFormValid) {
      setCateringData(formState);
      setFormState(initialFormState);
    }
    console.log(formState);
  }

  return (
    <div className="main" id="main">
      <h2 className="catering__title">
        Let us cater your special events and celebrations
      </h2>
      { !isFormValid &&
      <form className="catering__form" onSubmit={handleSubmit}>
        <label
          htmlFor={`${id}-name`}
          className="catering__label catering__label--required"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formState.name}
          id={`${id}-name`}
          placeholder="Enter your name"
          className="catering__field"
          onChange={(e) => {
            handleFieldChange("name", e.target.value);
            setIsNameValid(checkIsNameValid(e.target.value));
          }}
        />
        <p className="catering__field-error">{nameError}</p>

        <label
          htmlFor={`${id}-email`}
          className="catering__label catering__label--required"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          value={formState.email}
          id={`${id}-email`}
          placeholder="Enter your email"
          className="catering__field"
          onChange={(e) => {
            handleFieldChange("email", e.target.value);
            setIsEmailValid(checkIsEmailValid(e.target.value));
          }}
        />
        <p className="catering__field-error">{emailError}</p>

        <label
          htmlFor={`${id}-phone`}
          className="catering__label catering__label--required"
        >
          Phone
        </label>
        <input
          type="text"
          name="phone"
          value={formState.phone}
          id={`${id}-phone`}
          placeholder="Enter your phone number"
          className="catering__field"
          onChange={(e) => {
            handleFieldChange("phone", e.target.value);
            setIsPhoneValid(checkIsPhoneValid(e.target.value));
          }}
        />
        <p className="catering__field-error">{phoneError}</p>

        <label htmlFor={`${id}-date`} className="catering__label">
          Date
        </label>
        <input
          type="text"
          name="date"
          id={`${id}-date`}
          value={formState.date}
          placeholder="Enter event date"
          className="catering__field"
          onChange={(e) => handleFieldChange("date", e.target.value)}
        />

        <label htmlFor={`${id}-location`} className="catering__label">
          Location
        </label>
        <input
          type="text"
          name="location"
          id={`${id}-location`}
          value={formState.location}
          placeholder="Enter event location"
          className="catering__field"
          onChange={(e) => handleFieldChange("location", e.target.value)}
        />

        <label htmlFor={`${id}-message`} className="catering__label">
          Message
        </label>
        <textarea
          rows="3"
          type="text"
          name="message"
          id={`${id}-message`}
          value={formState.message}
          placeholder="Leave us a message"
          className="catering__field"
          onChange={(e) => handleFieldChange("message", e.target.value)}
        ></textarea>

        <label htmlFor={`${id}-event`} className="catering__label">
          Event
        </label>
        <select
          name="event"
          id={`${id}-event`}
          value={formState.selectedEvent}
          className="catering__field"
          onChange={handleOptionChange}
        >
          <option value="" disabled>
            Please select your event type
          </option>
          <option value="family">Family</option>
          <option value="company">Company</option>
          <option value="other">Other</option>
        </select>

        {formState.selectedEvent === "other" && (
          <>
            <label
              htmlFor={`${id}-spicified-event`}
              className="catering__label"
            >
              Specify
            </label>
            <input
              name="spicified-event"
              id={`${id}-spicified-event`}
              value={formState.spicifiedEvent}
              className="catering__field"
              onChange={handleOtherInputChange}
            />
          </>
        )}

        <span className="catering__required-indicator catering__label--required">
          Required fields
        </span>

        <Button type="submit" visual="button" className="catering__submit">
          Submit
        </Button>
      </form> }
      {isFormValid && (
        <>
          <p className="catering__message">Your catering query submitted!</p>
          <ul className="catering__data-list">
            <li className="catering__data-item">Name: {cateringData.name}</li>
            <li className="catering__data-item">Email: {cateringData.email}</li>
            <li className="catering__data-item">Phone: {cateringData.phone}</li>
            {cateringData.date && (
              <li className="catering__data-item">Date: {cateringData.date}</li>
            )}
            {cateringData.location && (
              <li className="catering__data-item">
                Location: {cateringData.location}
              </li>
            )}
            {cateringData.message && (
              <li className="catering__data-item">
                Message: {cateringData.message}
              </li>
            )}
            {(cateringData.spicifiedEvent || cateringData.selectedEvent) && (
              <li className="catering__data-item">
                Event Type:
                {isOtherEvent
                  ? cateringData.spicifiedEvent
                  : cateringData.selectedEvent}
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default MainCatering;
