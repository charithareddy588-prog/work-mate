import HomeHeader from "../components/dashboard/HomeHeader";
import SummaryCard from "../components/dashboard/SummaryCard";
import MeetingCard from "../components/dashboard/MeetingCard";
import TaskCard from "../components/dashboard/TaskCard";
import BottomNavigation from "../components/dashboard/BottomNavigation";
import StatusBar from "../components/common/StatusBar";

import meetings from "../data/meetings";
import tasks from "../data/tasks";

function Home() {
  return (
    <div className="mobile-screen min-h-screen bg-[#F5F6FA] pb-24">

      {/* iPhone Status Bar */}
      <StatusBar />

      {/* Dashboard Header */}
      <HomeHeader />

      <main className="space-y-4 p-4">

        {/* Summary */}
        <SummaryCard />

        {/* Today Meeting */}
        <section className="rounded-xl bg-white p-3">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold">
                Today Meeting
              </h2>

              <p className="mt-1 text-[9px] text-gray-400">
                Your schedule for the day
              </p>
            </div>

            <button className="text-[9px] text-primary">
              View All
            </button>
          </div>

          {meetings.length > 0 ? (
            meetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
              />
            ))
          ) : (
            <div className="py-10 text-center">
              <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-xl bg-purple-50 text-primary">
                <CalendarDaysPlaceholder />
              </div>

              <h3 className="text-xs font-semibold">
                No Meeting Available
              </h3>

              <p className="mt-2 text-[10px] text-gray-400">
                You don't have any meetings scheduled for today.
              </p>
            </div>
          )}
        </section>

        {/* Today Task */}
        <section className="rounded-xl bg-white p-3">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold">
                Today Task
              </h2>

              <p className="mt-1 text-[9px] text-gray-400">
                The tasks assigned to you for today
              </p>
            </div>

            <button className="text-[9px] text-primary">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
              />
            ))}
          </div>
        </section>

      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />

    </div>
  );
}

function CalendarDaysPlaceholder() {
  return (
    <span className="text-3xl">📅</span>
  );
}

export default Home;
