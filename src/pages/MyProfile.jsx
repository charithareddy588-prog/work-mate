
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Gem,
  Star,
  Sparkles,
  Diamond,
  BadgeCheck,
} from "lucide-react";

import ProfileMenu from "../components/profile/ProfileMenu";
import StatusBar from "../components/common/StatusBar";
import { useAuth } from "../context/AuthContext";

import profileImage from "../assets/images/main-profile.png";

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

  const achievements = [
    {
      name: "Probation Slayer",
      Icon: Gem,
      background: "bg-gradient-to-br from-[#A6F6A5] to-[#45D77C]",
      color: "text-white",
      shadow: "shadow-[0_4px_10px_rgba(75,210,120,0.25)]",
    },
    {
      name: "Junior Of The Month",
      Icon: Star,
      background: "bg-gradient-to-br from-[#C7B9FF] to-[#8872FF]",
      color: "text-white",
      shadow: "shadow-[0_4px_10px_rgba(135,110,255,0.25)]",
    },
    {
      name: "Employee Of The Year",
      Icon: Sparkles,
      background: "bg-gradient-to-br from-[#FFD29C] to-[#FFA443]",
      color: "text-white",
      shadow: "shadow-[0_4px_10px_rgba(255,164,67,0.25)]",
    },
    {
      name: "Top Performer",
      Icon: Diamond,
      background: "bg-gradient-to-br from-[#FF9FC2] to-[#F64F91]",
      color: "text-white",
      shadow: "shadow-[0_4px_10px_rgba(246,79,145,0.25)]",
    },
  ];

  return (
    <div className="mobile-screen min-h-screen bg-white">

      {/* Purple Header */}
      <div className="relative h-48 bg-[#805CFF] px-5 pt-2">

        <StatusBar className="!text-white" />

        <button
          onClick={() => navigate("/home")}
          className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary"
        >
          <ChevronLeft size={23} />
        </button>

        <h2 className="mt-1 text-center text-lg font-semibold text-white">
          My Profile
        </h2>

        {/* Profile Image */}
        <div className="absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-xl border-[3px] border-white bg-purple-100 shadow-md">
          <img
            src={profileImage}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Profile Content */}
      <div className="px-5 pb-8 pt-16">

        {/* User Information */}
        <div className="mb-7 text-center">
          <div className="flex items-center justify-center gap-1">
            <h2 className="text-xl font-bold text-[#17182B]">
              {user?.firstName
                ? `${user.firstName} ${user.lastName || ""}`
                : "Your Name"}
            </h2>

            <BadgeCheck
              size={21}
              fill="#805CFF"
              color="#805CFF"
              stroke="white"
            />
          </div>

          <p className="mt-1 text-base font-medium text-[#805CFF]">
            {user?.position || "Your Job Position"}
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-7">

          <h3 className="mb-4 text-sm font-semibold text-[#344054]">
            Achievement
          </h3>

          <div className="grid grid-cols-4 gap-2">

            {achievements.map((achievement) => {
              const Icon = achievement.Icon;

              return (
                <div
                  key={achievement.name}
                  className="flex min-w-0 flex-col items-center text-center"
                >
                  {/* Hexagonal Achievement Badge */}
                  <div
                    className={`flex h-[54px] w-[54px] items-center justify-center ${achievement.background} ${achievement.shadow}`}
                    style={{
                      clipPath:
                        "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                    }}
                  >
                    <div
                      className="flex h-[43px] w-[43px] items-center justify-center border border-white/50"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                      }}
                    >
                      <Icon
                        size={27}
                        strokeWidth={2.2}
                        className={achievement.color}
                        fill="white"
                        fillOpacity={0.2}
                      />
                    </div>
                  </div>

                  {/* Achievement Name */}
                  <p className="mt-3 max-w-[78px] text-[11px] font-medium leading-[15px] text-[#344054]">
                    {achievement.name}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* Account Menu */}
        <div className="mb-3">
          <h3 className="mb-3 text-sm font-semibold text-[#344054]">
            ACCOUNT
          </h3>

          <ProfileMenu onItemClick={handleItemClick} />
        </div>

      </div>
    </div>
  );
}

export default MyProfile;
