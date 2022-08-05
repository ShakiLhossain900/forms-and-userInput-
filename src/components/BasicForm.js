//assignemnet solution

import React from "react";
import useInput from "../hooks/use-input";
const BasicForm = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: fistNameChangeHandler,
    inputBlurHandler: fisrtNameBlurHandler,
    reset: resetfirstNameNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameNameInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName);
    resetLastNameNameInput();
    resetfirstNameNameInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <div className={firstNameInputClasses}>
          <label htmlFor="name">first Name</label>
          <input
            type="text"
            id="name"
            onBlur={fisrtNameBlurHandler}
            value={enteredFirstName}
            onChange={fistNameChangeHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">first name must not be empty!!</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
           type="text" 
           id="name" 
           onBlur={LastNameBlurHandler}
           value={enteredLastName}
           onChange={LastNameChangeHandler}
           />
            {lastNameInputHasError && (
            <p className="error-text"> last name must not be empty!!</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name" />
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
