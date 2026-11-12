
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#FAFAFF]">

      {/* Status Bar */}
      <div className="absolute left-0 right-0 top-0 z-20">
        <StatusBar />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Welcome Popup */}
      <div className="relative z-10 rounded-t-2xl bg-white px-6 pb-10 pt-16 text-center">

        <div className="absolute -top-12 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
          <UserRound size={30} />
        </div>

        <h1 className="text-lg font-bold">
          Welcome To Work Mate!
        </h1>

        <p className="mt-4 text-xs leading-5 text-gray-500">
          To enhance your user experience, please set up your
          profile first. This will help us tailor the app to your
          needs and ensure you get the most out of our features!
        </p>

        <div className="mt-6 space-y-3">
          <Button onClick={() => navigate("/complete-profile")}>
            Set Up My Profile
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate("/home")}
          >
            Explore The App First
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
