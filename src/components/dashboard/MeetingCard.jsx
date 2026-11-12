import { Clock, CalendarDays, Users } from "lucide-react";

function MeetingCard({ meeting }) {
  return (
    <div className="mb-3 rounded-xl bg-[#F5F5FA] p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-purple-100 p-2 text-primary">
            <CalendarDays size={15} />
          </div>

          <div>
            <h4 className="text-[11px] font-bold">
              {meeting.title}
            </h4>

            <p className="mt-1 text-[9px] text-gray-400">
              {meeting.date}
            </p>
          </div>
        </div>

        <button className="rounded-full bg-primary px-3 py-1 text-[9px] text-white">
          Join
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-[9px] text-gray-500">
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {meeting.time}
        </span>

        <span className="flex items-center gap-1">
          <Users size={12} />
          +{meeting.members}
        </span>
      </div>
    </div>
  );
}

export default MeetingCard;