import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    // const [name, hnadleNameChange] = useInputState('Murad Hooks')
    const emailState = useInputState('Murad@raj.com')

    const handleSubmit = e => {
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input onChange={hnadleNameChange} value={name} type="text" name="name"/> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;