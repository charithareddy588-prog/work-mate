
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Building2, Check } from "lucide-react";

import PasswordInput from "../components/auth/PasswordInput";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import StatusBar from "../components/common/StatusBar";
import { useAuth } from "../context/AuthContext";

import workmateLogo from "../assets/images/workmate-logo.png";

function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();

  const [form, setForm] = useState({
    email: "",
    phone: "",
    companyId: "",
    password: "",
    confirmPassword: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  // Receive agreement selection from Terms & Privacy page
  useEffect(() => {
    if (location.state?.termsAccepted !== undefined) {
      setAgreed(location.state.termsAccepted);
      setError("");

      navigate("/signup", {
        replace: true,
        state: null,
      });
    }
  }, [location.state, navigate]);

  const updateField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    if (!agreed) {
      setError("Please accept the terms and conditions");
      return;
    }

    register(form);
    navigate("/verify-email");
  };

  return (
    <div className="mobile-screen min-h-screen bg-[#FAFAFF] pb-8">

      {/* Status Bar */}
      <StatusBar />

      <div className="px-5">

        {/* Work Mate Logo */}
        <div className="mb-7 flex flex-col items-center pt-7 text-center">
          <img
            src={workmateLogo}
            alt="Work Mate Logo"
            className="mb-3 h-[52px] w-[52px] object-contain"
          />

          <h2 className="text-lg font-bold text-[#17182B]">
            Work Mate
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Register Using Your Credentials
          </p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <InputField
            label="Email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            type="email"
            icon={Mail}
            required
          />

          {/* Phone Number */}
          <div>
            <label className="form-label">
              Phone Number
            </label>

            <div className="flex gap-2">
              <select className="form-input w-[105px]">
                <option value="+91">IND +91</option>
                <option value="+1">USA +1</option>
                <option value="+44">UK +44</option>
              </select>

              <input
                type="tel"
                placeholder="+62 000 0000 0000"
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                className="form-input min-w-0 flex-1"
                required
              />
            </div>
          </div>

          {/* Company ID */}
          <InputField
            label="Company ID"
            placeholder="Enter Company ID"
            value={form.companyId}
            onChange={(e) =>
              updateField("companyId", e.target.value)
            }
            icon={Building2}
            required
          />

          {/* Password */}
          <PasswordInput
            label="Password"
            value={form.password}
            onChange={(e) =>
              updateField("password", e.target.value)
            }
          />

          {/* Confirm Password */}
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm My Password"
            value={form.confirmPassword}
            onChange={(e) =>
              updateField("confirmPassword", e.target.value)
            }
          />

          {/* Terms and Privacy Agreement */}
          <div className="flex items-start gap-2 text-[10px]">

            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`mt-0.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-sm border ${
                agreed
                  ? "border-primary bg-primary text-white"
                  : "border-primary"
              }`}
            >
              {agreed && <Check size={10} />}
            </button>

            <p className="leading-4">
              I agree with{" "}

              <button
                type="button"
                onClick={() =>
                  navigate("/terms-and-privacy")
                }
                className="text-primary"
              >
                terms & conditions
              </button>

              {" "}and{" "}

              <button
                type="button"
                onClick={() =>
                  navigate("/terms-and-privacy")
                }
                className="text-primary"
              >
                privacy policy
              </button>
            </p>

          </div>

          {/* Error Message */}
          {error && (
            <p className="text-xs text-red-500">
              {error}
            </p>
          )}

          {/* Sign Up Button */}
          <Button type="submit">
            Sign Up
          </Button>

        </form>

        {/* Sign In Link */}
        <p className="mt-12 text-center text-[10px]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signin")}
            className="text-primary"
          >
            Sign in here
          </button>
        </p>

      </div>
    </div>
  );
}

export default SignUp;
