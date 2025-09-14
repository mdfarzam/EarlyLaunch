export const AudienceSection = () => {
  return (
    <section className="py-16 bg-[#fafbfb]">
      <div className="container mx-auto px-16">
        <div className="text-center mb-4 flex">
          <span className="text-sm font-medium text-[#17565E] uppercase pl-5">
            Why you need a waitlist
          </span>
        </div>

        <div className="flex flex-row items-start justify-between pl-4">
          <h2 className="text-5xl font-[500] text-[#2A3031] text-start mb-16 tracking-tight ">
            Before You Build,
            <br />
            Build Your Audience.
          </h2>
          <p className="mb-24 text-[#5E6667] leading-tight text-sm font-[500] pr-4">
            Founders fail when they launch to nobody. A waitlist flips <br />
            the script creating hype, urgency and real traction <br />
            before you write another line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Feature 1 - Waitlist (20% smaller, fixed bleed) */}
          <div className="bg-[#F4F6F6] border border-[#C8D2D4] p-0 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
            <div className="flex-1 flex items-center justify-center p-2">
              <img
                src="/waitlist.jpeg"
                alt="Create buzz illustration"
                className="w-[80%] h-auto object-contain"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-medium text-[#1c1c21] mb-2">
                Create buzz
              </h3>
              <p className="leading-tight tracking-[0.1px] text-sm text-[#828A8C] font-[500]">
                Generate excitement with your waitlist and invite people to join
                your community.
              </p>
            </div>
          </div>

          {/* Feature 2 - Graph */}
          <div className="bg-[#F4F6F6] border border-[#C8D2D4] p-0 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
            <div className="flex-1">
              <img
                src="/graph.jpeg"
                alt="Track progress illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-medium text-[#1c1c21] mb-2">
                Track progress
              </h3>
              <p className="leading-tight tracking-[0.1px] text-sm text-[#828A8C] font-[500]">
                Monitor your waitlist growth and see engagement insights in
                real-time.
              </p>
            </div>
          </div>

          {/* Feature 3 - Alert (slightly bigger) */}
          <div className="bg-[#F4F6F6] border border-[#C8D2D4] p-0 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
            <div className="flex-1 flex items-center justify-center p-2">
              <img
                src="/alert.jpeg"
                alt="Stay notified illustration"
                className="w-[80%] h-auto object-contain"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-medium text-[#1c1c21] mb-2">
                Stay notified
              </h3>
              <p className="leading-tight tracking-[0.1px] text-sm text-[#828A8C] font-[500]">
                Receive instant alerts and updates so you never miss important
                activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
