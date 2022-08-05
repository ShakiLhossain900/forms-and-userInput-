// import { useEffect, useRef, useState } from "react";

// const SimpleInput = (props) => {
//   const nameInputRef = useRef();

//   const [enterdName, setEnerdName] = useState("");
//   const [ensteredNameIsValid, setEnterdNameIsValid] = useState(false);
//   const [enteredNameTouched, setEnerdNameTouched] = useState(false);

//   useEffect(() => {
//     if (ensteredNameIsValid) {
//       console.log("Name Input is Valid!");
//     }
//   }, [ensteredNameIsValid]);

//   const nameInputChangeHandler = (event) => {
//     setEnerdName(event.target.value);
//     if (enterdName.trim() !== "") {
//       setEnterdNameIsValid(true);
//     }
//   };

//   const nameInputBlurHandler = (event) => {
//     setEnerdNameTouched(true);

//     if (enterdName.trim() === " ") {
//       setEnterdNameIsValid(false);
//     }
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     setEnerdNameTouched(true);

//     if (enterdName.trim() === "") {
//       setEnterdNameIsValid(false);
//       return;
//     }

//     setEnterdNameIsValid(true);

//     console.log(enterdName);
//     const enteredValue = nameInputRef.current.value;
//     console.log(enteredValue);

//     // nameInputRef.current.value = ' ';   NOT IDEAL, DON'T MANIPULATE THE DOM
//     //manipulate means handle or control
//     setEnerdName("");
//   };

//   const nameInputIsInValid = !ensteredNameIsValid && enteredNameTouched;

//   const nameInputClassess = nameInputIsInValid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClassess}>
//         <label htmlFor="name">Your name</label>
//         <input
//           ref={nameInputRef}
//           type="text"
//           id="name"
//           onBlur={nameInputBlurHandler}
//           value={enterdName}
//           onChange={nameInputChangeHandler}
//         />
//         {nameInputIsInValid && (
//           <p className="error-text">Name must not be empty. </p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };
// export default SimpleInput;

/// THE UPPER  ONE  IS THE PREVIOUS LOGIC AND THE DOWN ONE THE NEW LOGIC TO REMOVE THE CODE  LENGTH

//BUT IT WILL WORK AS THE SAME AS BEFORE

//this two input kaj na korar karone ami thik same kaj korar jonnu ami custom hook use koreci nicher tay

// import { useState } from "react";

// const SimpleInput = (props) => {
//   const [enteredName, setEneredName] = useState("");
//   const [enteredNameTouched, setEnerdNameTouched] = useState(false);

//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

//   //this 2 state and logic only for one input if there is more than one we need to do
//   //const [formIsValid, setFormIsValid] = useState(false);

//   const enteredNameIsValid = enteredName.trim() !== "";
//   const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

//   const enteredEmailIsValid = enteredEmail.includes("@");
//   const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

//   //using useEffect more than none input for logic also
//   // useEffect(() => {
//   //   if(enteredNameIsValid ){
//   //     setFormIsValid(true)
//   //   }
//   //   else{
//   //     setFormIsValid(false)
//   //   }
//   // }, [enteredNameIsValid]);

//   //useEffect use hook use kora lagbe na multiple form validity check kortece karon atay kno side effect nai
//   let formIsValid = false;

//   if (enteredNameIsValid && enteredEmailIsValid) {
//     formIsValid = true;
//   }

//   const nameInputChangeHandler = (event) => {
//     setEneredName(event.target.value);
//   };
//   const emailInputChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };

//   const nameInputBlurHandler = (event) => {
//     setEnerdNameTouched(true);
//   };
//   const emailInputBlurHandler = (event) => {
//     setEnerdNameTouched(true);
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     setEnerdNameTouched(true);
//     setEnteredEmailTouched(true);

//     if (!enteredNameIsValid) {
//       return;
//     }

//     console.log(enteredName);
//     console.log(enteredEmail);

//     setEneredName("");
//     setEnteredEmail("");
//     setEnerdNameTouched(false);
//     setEnteredEmailTouched(false);
//   };

//   const nameInputClassess = nameInputIsInValid
//     ? "form-control invalid"
//     : "form-control";
//   const emailInputClasses = emailInputIsInValid
//     ? "form-control invalid"
//     : "form-control";

//   //hey allah! help me allah help me allah help me allah help me allah help me allah help
//   //allah tomk code er vitor tomk dakteci allah amak tomi help koro allah takar ovab mone hocce allah help me

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClassess}>
//         <label htmlFor="name">Your name</label>
//         <input
//           type="text"
//           id="name"
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//           onChange={nameInputChangeHandler}
//         />
//         {nameInputIsInValid && (
//           <p className="error-text">Name must not be empty. </p>
//         )}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor="email">Your Email</label>
//         <input
//           type="email"
//           name="email"
//           onBlur={emailInputBlurHandler}
//           value={enteredEmail}
//           onChange={emailInputChangeHandler}
//         />
//         {emailInputIsInValid && (
//           <p className="error-text">Please enter a valid email</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };
// export default SimpleInput;





/////  USING MULTIPLE INPUT FOR CUSTOM CHANGE HANDLER  //////////////////

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid, //alis
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");



  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    resetNameInput();
  };
  

  const nameInputClassess = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClassess}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          value={enteredName}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty. </p>
        )}
      </div>
      {/* <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          onChange={emailInputChangeHandler}
        />
        {emailInputIsInValid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div> */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
