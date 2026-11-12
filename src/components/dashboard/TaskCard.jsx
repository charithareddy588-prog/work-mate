import { MessageCircle, CalendarDays } from "lucide-react";

function TaskCard({ task }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#F7F7FA] p-3">
      <div className="flex items-center justify-between">
        <h4 className="text-[11px] font-bold">
          {task.title}
        </h4>

        <span className="rounded-full bg-red-100 px-2 py-1 text-[8px] font-semibold text-red-500">
          {task.priority}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="rounded-full bg-purple-100 px-2 py-1 text-[8px] text-primary">
          {task.status}
        </span>

        <span className="text-[9px] text-gray-400">
          {task.progress}% Completed
        </span>
      </div>

      <div className="mt-3 h-1.5 rounded-full bg-gray-200">
        <div
          className="h-1.5 rounded-full bg-primary"
          style={{ width: `${task.progress}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-[9px] text-gray-400">
        <span className="flex items-center gap-1">
          <CalendarDays size={12} />
          {task.dueDate}
        </span>

        <span className="flex items-center gap-1">
          <MessageCircle size={12} />
          {task.comments}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;