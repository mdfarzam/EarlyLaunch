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
            <div className="h-[320px] md:h-[480px] bg-[#D4E9EB] rounded-2xl p-8 relative"></div>
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
              <li>Use any platform</li>
              <li>Keep your brand and layout</li>
              <li>No vendor lock-in, full control</li>
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
              Launch your audience,<br /> before your product
            </h2>
            <p className="text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium mb-4">
              Collect signups, build anticipation, and validate <br /> your idea
              while staying focused on your product.
            </p>
            <ul className="space-y-1 mb-5 text-sm font-medium text-[#828A8C]">
              <li>Use any platform</li>
              <li>Keep your brand and layout</li>
              <li>No vendor lock-in, full control</li>
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
      </div>
    </section>
  );
};
