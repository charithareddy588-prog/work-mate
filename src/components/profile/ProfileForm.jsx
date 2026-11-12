import InputField from "../common/InputField";
import { UserRound, CalendarDays, BriefcaseBusiness } from "lucide-react";

function ProfileForm({ profile, setProfile }) {
  const update = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-4 rounded-xl bg-white p-4 shadow-soft">
      <div>
        <h3 className="text-xs font-bold">Personal Data Information</h3>
        <p className="mt-1 text-[10px] text-gray-400">
          Your personal data
        </p>
      </div>

      <div className="flex flex-col items-center py-3">
        <label className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl border border-dashed border-purple-300 bg-purple-50 text-primary">
          <UserRound size={30} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              update("photo", e.target.files?.[0]?.name || "")
            }
          />
        </label>

        <p className="mt-2 text-[10px] text-gray-400">
          Upload Photo
        </p>
      </div>

      <InputField
        label="First Name"
        placeholder="First Name"
        value={profile.firstName}
        onChange={(e) => update("firstName", e.target.value)}
        icon={UserRound}
      />

      <InputField
        label="Last Name"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={(e) => update("lastName", e.target.value)}
        icon={UserRound}
      />

      <div>
        <label className="form-label">Date of Birth</label>
        <div className="relative">
          <CalendarDays
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
          />
          <input
            type="date"
            value={profile.dob}
            onChange={(e) => update("dob", e.target.value)}
            className="form-input pl-9"
          />
        </div>
      </div>

      <div>
        <label className="form-label">Position</label>
        <div className="relative">
          <BriefcaseBusiness
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
          />
          <select
            value={profile.position}
            onChange={(e) => update("position", e.target.value)}
            className="form-input appearance-none pl-9"
          >
            <option value="">Select Position</option>
            <option>Junior Full Stack Developer</option>
            <option>Senior Developer</option>
            <option>UI/UX Designer</option>
            <option>HR Manager</option>
            <option>Project Manager</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;