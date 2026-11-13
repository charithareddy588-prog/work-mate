import {
  UserRound,
  Folder,
  Wallet,
  ShieldCheck,
  Lock,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    items: [
      { label: "My Work Profile", icon: UserRound },
      { label: "Office Assets", icon: Folder },
      { label: "Payroll & Tax", icon: Wallet },
      { label: "Roles", icon: ShieldCheck },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Change Password", icon: Lock },
      { label: "Versioning", icon: Settings },
      { label: "FAQ and Help", icon: HelpCircle },
      { label: "Logout", icon: LogOut },
    ],
  },
];

function ProfileMenu({ onItemClick }) {
  return (
    <div className="space-y-5">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="mb-3 text-[10px] font-bold text-gray-500">
            {section.title}
          </h3>

          <div className="rounded-xl bg-[#F3F4F9] p-3">
            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  onClick={() => onItemClick(item.label)}
                  className="flex w-full items-center justify-between py-2 text-left"
                >
                  <span className="flex items-center gap-3 text-[11px]">
                    <Icon
                      size={14}
                      className={
                        item.label === "Logout"
                          ? "text-red-500"
                          : "text-primary"
                      }
                    />
                    {item.label}
                  </span>

                  <ChevronRight size={14} className="text-gray-400" />
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileMenu;