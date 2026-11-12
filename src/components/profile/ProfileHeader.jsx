import BackButton from "../common/BackButton";

function ProfileHeader({ title = "My Work Profile" }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4">
      <BackButton />
      <h2 className="text-sm font-semibold">{title}</h2>
      <div className="w-8" />
    </div>
  );
}

export default ProfileHeader;