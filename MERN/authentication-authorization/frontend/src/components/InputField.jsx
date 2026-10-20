
function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className
}) {
  return (
    // <div className="input-group">
    <div className={className}>
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default InputField;
