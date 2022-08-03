import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enterdName, setEnerdName] = useState("");
  const [ensteredNameIsValid, setEnterdNameIsValid] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnerdName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(enterdName.trim() === ''){
      setEnterdNameIsValid(false)
      return;
    }

    setEnterdNameIsValid(true)

    console.log(enterdName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);


   // nameInputRef.current.value = ' ';   NOT IDEAL, DON'T MANIPULATE THE DOM      
   //manipulate means handle or control
    setEnerdName('')
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enterdName}
          onChange={nameInputChangeHandler}
        />
        {!ensteredNameIsValid && <p>Name must not be empty. </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
