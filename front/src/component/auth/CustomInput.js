const CustomInput = (props) =>{

    const type = props.type;
    const placeHolder = props.placeHolder;
    const handleInput = props.handleInput;

    return (
        <div className="form-outline form-white mb-4">
            <input
                type = {type}
                className="form-control form-control-lg"
                placeholder= {placeHolder}
                onChange={handleInput}
            />
        </div>
    );
}
export default CustomInput;