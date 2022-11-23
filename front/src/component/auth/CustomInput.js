const CustomInput = (props) => {
  const { type, placeHolder, handleInput, className } = props;

  return (
    <div className="form-outline form-white mb-4">
      <input
        type={type}
        className={`form-control form-control-lg ${className}`}
        placeholder={placeHolder}
        onChange={handleInput}
      />
    </div>
  );
};
export default CustomInput;
