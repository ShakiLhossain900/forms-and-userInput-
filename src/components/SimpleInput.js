
const SimpleInput = (props) => {
    return (
        <form>
            <div className='form-control'>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name"/>
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};
//hey 
export default SimpleInput;


