import {useRef,useState} from 'react';

const SimpleInput = (props) => {
const [enterdName, setEnerdName] = useState('');

const nameInputChangeHandler = (event) => {
     setEnerdName(event.target.value);
}

const formSubmitHandler = (event) =>{
    event.preventDefault();
}

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" onChange={nameInputChangeHandler}/>
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};
export default SimpleInput;


