


const FormInput = ({label,name ,type,DefaultValue}) => {
  return (
    <div className="form-control  ">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={DefaultValue}
        placeholder="Type here"
        className="input input-bordered "
      />
    </div>
  );
};

export default FormInput;
