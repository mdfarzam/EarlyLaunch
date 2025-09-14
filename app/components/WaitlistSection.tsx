import Image from "next/image";

export const WaitlistSection = () => {
  return (
    <section className="py-16 bg-[#fafbfb]">
      <div className="container mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-sm font-medium text-[#17565E] uppercase">
            HOW IT WORKS
          </span>
        </div>
        <h2 className="text-5xl font-medium tracking-tight text-[#2A3031] text-center mb-6">
          From Idea to Waitlist
          <br />
          in Minutes
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="text-center mb-16 text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium font-[500]">
            Setting up an Early Launch takes less time than making your own
            morning <br /> coffee. Here's how simple it is to start growing your
            audience today.
          </p>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-50 mb-20">
          {/* Left - Browser Mock */}

          <div className="md:w-1/2 w-full">
            <div className="h-[320px] md:h-[480px] bg-[#D4E9EB] rounded-2xl p-8 relative overflow-hidden">


              <img
                src="/left-1.svg"
                alt="Left Decoration"
                className="absolute top-[40%] left-[5%] w-32 h-48 z-20"
              />

              <img
                src="/middle-cursor.svg"
                alt="Middle Cursor"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 z-10"
              />

              <img
                src="/right-1.svg"
                alt="Right Decoration"
                className="absolute top-[35%] right-[5%] w-32 h-28 z-20"
              />
            </div>
          </div>



          {/* Right - Content */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-medium text-[#2A3031] leading-tight tracking-tight mb-4">
              Build your website in minutes,<br /> not months
            </h2>
            <p className="text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium mb-4">
              Create your site on the platform you already use. Keep full design
              and hosting control, we'll connect to it in seconds.
            </p>
            <ul className="space-y-1 mb-5 text-sm font-medium text-[#828A8C]">
              <li className="flex gap-1"> <img src="/CirclesThreePlus.svg" alt="1" /> Use any platform</li>
              <li className="flex gap-1"><img src="/Layout.svg" alt="1" />Keep your brand and layout</li>
              <li className="flex gap-1"><img src="/Lightning.svg" alt="1" />No vendor lock-in, full control</li>
            </ul>
            <button className="bg-[#17565E] text-white px-4 py-1.5 rounded-md text-sm font-medium">
              Browse Templates
            </button>
          </div>
        </div>

        {/* Section 2 (Flipped) */}
        <div className="flex flex-col md:flex-row items-center gap-50 mb-20">
          {/* Left - Content */}
          <div className="md:w-1/2 w-full order-2 md:order-1">
            <h2 className="text-3xl font-medium text-[#2A3031] leading-tight tracking-tight mb-4">
              Plug in powerful tools with <br /> zero friction
            </h2>
            <p className="text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium mb-4">
              Embed forms or connect via webhooks in a few clicks. Our system fits neatly into your existing stack so you can start gathering leads without disrupting your workflow.
            </p>
            <ul className="space-y-1 mb-5 text-sm font-medium text-[#828A8C]">
              <li className="flex gap-1"><img src="/CopySimple.svg" alt="1" />Copy a snippet or embed block</li>
              <li className="flex gap-1"><img src="/PresentationChart.svg" alt="1" />Live preview before you publish</li>
              <li className="flex gap-1"><img src="/ShieldCheck.svg" alt="1" />Sandbox and secure by default</li>
            </ul>
            <button className="bg-[#17565E] text-white px-4 py-1.5 rounded-md text-sm font-medium">
              Browse Templates
            </button>
          </div>

          {/* Right - Browser Mock */}
          <div className="md:w-1/2 w-full order-1 md:order-2">
            <div className="h-[320px] md:h-[480px] bg-[#D4E9EB] rounded-2xl p-8 relative"></div>
          </div>
        </div>

        {/* section 3 */}

        <div className="flex flex-col md:flex-row items-center gap-50 mb-20">
          {/* Left - Browser Mock */}
          <div className="md:w-1/2 w-full">
            <div className="h-[320px] md:h-[480px] bg-[#D4E9EB] rounded-2xl p-8 relative">
              <img
                src="/graph3.svg"
                alt="Middle Cursor"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 z-10"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-medium text-[#2A3031] leading-tight tracking-tight mb-4">
              Control everything from one simple<br />dashboard
            </h2>
            <p className="text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium mb-4">
              View sign-ups, segment your audience, automate follow-ups, and track results all from a single clean hub designed to keep you in control.
            </p>
            <ul className="space-y-1 mb-5 text-sm font-medium text-[#828A8C]">
              <li className="flex gap-1"><img src="/ChartBar.svg" alt="1" />Real-time analytics & trends</li>
              <li className="flex gap-1"><img src="/EnvelopeSimpleOpen.svg" alt="1" />Targeted follow-ups and campaigns</li>
              <li className="flex gap-1"><img src="/CloudArrowUp.svg" alt="1" />Export or sync leads anytime</li>
            </ul>
            <button className="bg-[#17565E] text-white px-4 py-1.5 rounded-md text-sm font-medium">
              Browse Templates
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
