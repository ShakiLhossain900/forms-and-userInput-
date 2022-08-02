import React from 'react';

const SimpleInput = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;


