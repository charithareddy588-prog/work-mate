import { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

function PasswordInput({
  label,
  placeholder = "My Password",
  value,
  onChange,
}) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="form-label">{label}</label>

      <div className="relative">
        <LockKeyhole
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
        />

        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-input pl-9 pr-10"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;