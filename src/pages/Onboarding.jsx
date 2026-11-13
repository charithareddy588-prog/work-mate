
import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";

import todayTask from "../assets/images/today-task.png";
import workingPeriod from "../assets/images/working-period.png";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full justify-center overflow-y-auto bg-[#F0F0F5]">

      {/* Mobile Screen */}
      <div className="relative flex min-h-[844px] w-full max-w-[390px] flex-col overflow-hidden bg-[#FAFAFF]">

        {/* Illustration Section */}
        <div className="relative h-[530px] w-full shrink-0 overflow-hidden bg-gradient-to-b from-[#7951F7] via-[#A68AFF] to-[#F4F0FF]">

          {/* Status Bar */}
          <StatusBar className="!text-white" />

          {/* Today Task Image - Background */}
          <img
            src={todayTask}
            alt="Today Task"
            className="absolute z-10 object-fill"
            style={{
              width: "287.81px",
              height: "173.41px",
              left: "40px",
              top: "105px",
              transform: "rotate(-0deg)",
              transformOrigin: "center",
            }}
          />

          {/* Working Period Image - Foreground */}
          <img
            src={workingPeriod}
            alt="Working Period"
            className="absolute z-20 object-fill"
            style={{
              width: "387.01px",
              height: "329.55px",
              left: "6px",
              top: "178px",
              transform: "rotate(-2deg)",
              transformOrigin: "center",
            }}
          />

        </div>

        {/* Bottom Content */}
        <div className="flex min-h-[340px] flex-col items-center justify-start bg-[#FAFAFF] px-7 pb-10 pt-8 text-center">

          {/* Heading */}
          <h1 className="text-[20px] font-bold leading-[27px] text-[#17182B]">
            Navigate Your Work Journey
            <br />
            Efficient & Easy
          </h1>

          {/* Description */}
          <p className="mt-3 text-xs leading-[18px] text-gray-500">
            Increase your work management & career
            <br />
            development radically.
          </p>

          {/* Navigation Buttons */}
          <div className="mt-8 w-full space-y-3">

            <Button onClick={() => navigate("/signin")}>
              Sign In
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Onboarding;
