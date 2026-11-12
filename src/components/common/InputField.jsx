function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  icon: Icon,
  rightElement,
  required = false,
}) {
  return (
    <div className="w-full">
      <label className="form-label">{label}</label>

      <div className="relative flex items-center">
        {Icon && (
          <Icon
            size={15}
            className="absolute left-3 text-[#9674FF]"
          />
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`form-input ${Icon ? "pl-9" : ""} ${rightElement ? "pr-10" : ""}`}
        />

        {rightElement && (
          <div className="absolute right-3">{rightElement}</div>
        )}
      </div>
    </div>
  );
}

export default InputField;