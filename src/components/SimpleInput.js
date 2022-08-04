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


import { useState } from "react";

const SimpleInput = (props) => {

  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClassess}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          value={enterdName}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty. </p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;

