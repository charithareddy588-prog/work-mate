
import { useState } from "react";
import {
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";

function PasswordInput({
  label,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-[#45445A]">
        {label}
      </label>

      <div className="relative w-full">

        {/* Lock Icon */}
        <LockKeyhole
          size={19}
          strokeWidth={2}
          className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#8957FF]"
        />

        {/* Password Input */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={value}
          onChange={onChange}
          required
          className="h-[54px] w-full rounded-xl border border-[#D5D5E5] bg-white pl-11 pr-12 text-sm text-[#17182B] outline-none transition focus:border-[#8957FF] focus:ring-2 focus:ring-[#8957FF]/10"
        />

        {/* Show / Hide Password */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8957FF]"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff size={19} />
          ) : (
            <Eye size={19} />
          )}
        </button>

      </div>
    </div>
  );
}

export default PasswordInput;
