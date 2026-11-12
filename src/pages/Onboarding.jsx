import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";
import { ChartNoAxesCombined } from "lucide-react";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen flex min-h-screen flex-col overflow-hidden bg-[#FAFAFF]">

      {/* Illustration Section with Gradient */}
      <div className="relative flex h-[530px] shrink-0 flex-col overflow-hidden bg-gradient-to-b from-[#7951F7] via-[#A68AFF] to-[#F4F0FF]">

        {/* Transparent Status Bar */}
        <StatusBar className="text-white" />

        {/* Illustration */}
        <div className="flex flex-1 items-center justify-center overflow-hidden px-7">

          <div className="w-full -rotate-[8deg] rounded-xl bg-white p-5 shadow-xl">

            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold">
                Today Task
              </span>

              <span className="rounded-full bg-purple-100 px-2 py-1 text-[9px] text-primary">
                1
              </span>
            </div>

            {/* Today Task Card */}
            <div className="rounded-lg bg-gray-50 p-3">

              <div className="flex items-center gap-2">
                <ChartNoAxesCombined
                  className="text-primary"
                  size={20}
                />

                <div>
                  <p className="text-[10px] font-bold">
                    Writing Dashboard Analytics
                  </p>

                  <p className="text-[8px] text-gray-400">
                    In Progress
                  </p>
                </div>
              </div>

              <div className="mt-4 h-2 rounded-full bg-purple-100">
                <div className="h-2 w-2/3 rounded-full bg-primary" />
              </div>

            </div>

            {/* Working Period Card */}
            <div className="mt-3 rounded-lg border border-gray-200 p-3">

              <p className="text-xs font-bold">
                Working Period
              </p>

              <div className="mt-3 flex h-24 items-end justify-between">
                {[25, 40, 35, 60, 52, 80, 95].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="w-5 rounded-t bg-gradient-to-t from-[#895DFF] to-[#E5D5FF]"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-1 flex-col justify-end bg-[#FAFAFF] px-8 pb-10 pt-8 text-center">

        <h1 className="text-[20px] font-bold leading-7 text-[#17182B]">
          Navigate Your Work Journey
          <br />
          Efficient & Easy
        </h1>

        <p className="mt-3 text-xs leading-5 text-gray-500">
          Increase your work management & career development
          radically.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 space-y-3">

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
  );
}

export default Onboarding;
