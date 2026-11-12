
import { useNavigate } from "react-router-dom";
import { ChevronLeft, UserRound, Award } from "lucide-react";

import ProfileMenu from "../components/profile/ProfileMenu";
import StatusBar from "../components/common/StatusBar";
import { useAuth } from "../context/AuthContext";

function MyProfile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleItemClick = (item) => {
    if (item === "Logout") {
      logout();
      navigate("/");
    } else if (item === "My Work Profile") {
      navigate("/complete-profile");
    }
  };

  return (
    <div className="mobile-screen min-h-screen bg-white">

      {/* Purple Header */}
      <div className="relative h-48 bg-[#805CFF] px-5 pt-2">

        {/* White Status Bar - Same as Onboarding */}
        <StatusBar className="!text-white" />

        <button
          onClick={() => navigate("/home")}
          className="mt-2 text-white"
        >
          <ChevronLeft size={22} />
        </button>

        <h2 className="mt-1 text-center text-sm font-semibold text-white">
          My Profile
        </h2>

        {/* Profile Image */}
        <div className="absolute -bottom-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-xl border-4 border-white bg-purple-100 text-primary">
          <UserRound size={48} />
        </div>
      </div>

      {/* Profile Content */}
      <div className="px-5 pb-8 pt-16">

        <div className="mb-6 text-center">
          <h2 className="text-sm font-bold">
            {user?.firstName
              ? `${user.firstName} ${user.lastName}`
              : "Your Name"}
          </h2>

          <p className="mt-1 text-[10px] text-primary">
            {user?.email || "yourmail@work.com"}
          </p>

          <p className="mt-1 text-[10px] text-gray-400">
            {user?.position || "Your Job Position"}
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="mb-3 text-[10px] font-bold">
            ACHIEVEMENTS
          </h3>

          <div className="flex justify-between rounded-xl bg-[#F3F4F9] p-4">
            {[
              "Probatian Slayer",
              "Junior Of The Month",
              "Employee Of The Year",
            ].map((name) => (
              <div key={name} className="text-center">
                <Award
                  size={25}
                  className="mx-auto text-primary"
                />
                <p className="mt-2 max-w-16 text-[8px]">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ProfileMenu onItemClick={handleItemClick} />
      </div>
    </div>
  );
}

export default MyProfile;
