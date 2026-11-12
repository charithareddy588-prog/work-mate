
import { useNavigate } from "react-router-dom";

import StatusBar from "../components/common/StatusBar";

function TermsAndPrivacy() {
  const navigate = useNavigate();

  const handleAgreement = () => {
    navigate("/signup", {
      state: { termsAccepted: true },
    });
  };

  const handleDecline = () => {
    navigate("/signup", {
      state: { termsAccepted: false },
    });
  };

  return (
    <div className="min-h-screen bg-[#F0F0F5] flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-[#FAFAFF] flex flex-col px-5 pt-2 pb-6">

        {/* Status Bar */}
        <StatusBar />

        {/* Heading */}
        <h1 className="text-center text-[17px] leading-[22px] font-bold text-[#171827] mb-6 mt-5">
          Terms & Conditions and
          <br />
          Privacy Policy
        </h1>

        {/* Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto bg-white px-4 py-4 mb-5 text-[11px] leading-[1.55] text-[#34364A]">

          <h2 className="font-semibold mb-1">
            Terms and Conditions:
          </h2>

          <p className="mb-4">
            Acceptance: By using the Work Mate app, you agree to comply
            with all applicable terms and conditions.
          </p>

          <p className="mb-4">
            Usage: This app is for personal use only and may not be used
            for commercial purposes without permission.
          </p>

          <p className="mb-4">
            Account: You are responsible for the security of your account
            and all activities that occur within it.
          </p>

          <p className="mb-4">
            Content: You must not upload content that violates copyright,
            privacy, or applicable laws.
          </p>

          <p className="mb-4">
            Changes: We reserve the right to change the terms and
            conditions at any time and will notify you of these changes
            through the app or via email.
          </p>

          <h2 className="font-semibold mb-1">
            Privacy Policy:
          </h2>

          <p className="mb-4">
            Data Collection: We collect personal data such as name,
            email, and location to process transactions and improve
            our services.
          </p>

          <p className="mb-4">
            Data Usage: Your data is used for internal purposes such
            as account management, usage analysis, and service offerings.
          </p>

          <p className="mb-4">
            Security: We protect your data with appropriate security
            measures to prevent unauthorized access.
          </p>

          <p className="mb-4">
            Data Sharing: We do not share your personal data with
            third parties without your consent, except as required by law.
          </p>

          <p className="mb-4">
            Your Rights: You can access, update, or delete your personal
            data at any time through your account settings, subject
            to applicable laws.
          </p>

          <p className="mb-4">
            Data Retention: Your information is retained only for as
            long as necessary to provide our services and meet legal
            obligations.
          </p>

          <p className="mb-4">
            Contact: If you have questions about this Privacy Policy,
            please contact our support team.
          </p>

        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            type="button"
            onClick={handleAgreement}
            className="primary-button"
          >
            I Agree
          </button>

          <button
            type="button"
            onClick={handleDecline}
            className="outline-button"
          >
            Decline
          </button>
        </div>

      </div>
    </div>
  );
}

export default TermsAndPrivacy;
