import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEneredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEneredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = ()=> {
    setEneredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler, 
    inputBlurHandler,
    reset,
  };
};
export default useInput;
