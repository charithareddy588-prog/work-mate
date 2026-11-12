
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileForm from "../components/profile/ProfileForm";
import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";
import { useAuth } from "../context/AuthContext";

function CompleteProfile() {
  const navigate = useNavigate();
  const { updateUser } = useAuth();

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    position: "",
    photo: "",
  });

  const handleSave = () => {
    if (
      !profile.firstName ||
      !profile.lastName ||
      !profile.position
    ) {
      alert("Please fill in all required profile details");
      return;
    }

    updateUser(profile);
    navigate("/profile");
  };

  return (
    <div className="mobile-screen pb-24">

      {/* Figma Status Bar */}
      <StatusBar />

      {/* Profile Header */}
      <ProfileHeader />

      {/* Profile Form */}
      <div className="space-y-4 p-4">
        <ProfileForm
          profile={profile}
          setProfile={setProfile}
        />

        {/* Address Section */}
        <div className="rounded-xl bg-white p-4">
          <h3 className="text-xs font-bold">
            Address
          </h3>

          <p className="mt-1 text-[10px] text-gray-400">
            Your current domicile
          </p>

          <input
            placeholder="Enter your address"
            className="form-input mt-3"
          />
        </div>
      </div>

      {/* Fixed Update Profile Button */}
      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white p-4">
        <Button onClick={handleSave}>
          Update Profile
        </Button>
      </div>

    </div>
  );
}

export default CompleteProfile;
