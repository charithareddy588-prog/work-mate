import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OtpInput from "../components/auth/OtpInput";
import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";
import { useAuth } from "../context/AuthContext";

function EmailVerification() {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Please enter all six digits");
      return;
    }

    updateUser({ verified: true });
    navigate("/welcome");
  };

  return (
    <div className="mobile-screen relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#FAFAFF]">

      {/* Status Bar */}
      <div className="absolute left-0 right-0 top-0 z-20">
        <StatusBar />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Verification Popup */}
      <div className="relative z-10 rounded-t-2xl bg-white px-5 pb-10 pt-12">

        <h2 className="text-center text-lg font-bold">
          Email Verification Sent!
        </h2>

        <p className="mt-3 text-center text-[11px] leading-5 text-gray-500">
          A verification code will be sent to the email
          <br />
          {user?.email || "your registered email"} for your account
          verification process.
        </p>

        <div className="mt-6">
          <OtpInput value={otp} onChange={setOtp} />
        </div>

        <p className="mt-4 text-[10px]">
          Haven't received the verification code?{" "}
          <button type="button" className="text-primary">
            Resend it.
          </button>
        </p>

        <Button onClick={handleVerify} className="mt-5">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default EmailVerification;
