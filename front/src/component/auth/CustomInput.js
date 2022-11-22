const CustomInput = (props) =>{

    const type = props.type;
    const placeHolder = props.placeHolder;

    return (
        <div className="form-outline form-white mb-4">
            <input
                type = {type}
                className="form-control form-control-lg"
                placeholder= {placeHolder}
            />
        </div>
    );
}
export default CustomInput;