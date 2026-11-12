
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

import AuthHeader from "../components/auth/AuthHeader";
import PasswordInput from "../components/auth/PasswordInput";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const saved = JSON.parse(
      localStorage.getItem("workmate_user") || "null"
    );

    if (
      saved &&
      saved.email === email &&
      saved.password === password &&
      saved.verified
    ) {
      navigate("/home");
    } else {
      setError("Invalid credentials or email not verified");
    }
  };

  return (
    <div className="mobile-screen min-h-screen px-5">
      {/* Status Bar */}
      <StatusBar />

      <AuthHeader />

      <div className="mb-7 text-center">
        <h1 className="text-xl font-bold">Welcome Back!</h1>
        <p className="mt-2 text-xs text-gray-500">
          Sign in to continue using Work Mate
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <InputField
          label="Email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          icon={Mail}
          required
        />

        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-right">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-xs text-primary"
          >
            Forgot Password?
          </button>
        </div>

        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}

        <Button type="submit">Sign In</Button>
      </form>

      <p className="mt-10 text-center text-xs">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="text-primary"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default SignIn;
