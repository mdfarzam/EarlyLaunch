
export const ToolsSection = () => {
  return <section className="py-16 bg-[#fafbfb]">
    <div className="container mx-auto px-16">
      <div className="text-center mb-4">
        <span className="text-sm font-medium text-teal-800 uppercase pl-5">
          POWERFUL TOOLS
        </span>
      </div>
      <h2 className="text-5xl font-medium tracking-tight text-[#1c1c21] text-center mb-6">
        Everything You Need to
        <br />
        Launch Successfully
      </h2>
      <p className="text-center text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium font-[500] mb-16">
        Our platform provides all the tools you need to create, manage, and <br />
        grow your waitlist effectively, from signup to launch day.
      </p>
      <div className="grid grid-cols-3 gap-8 px-4">
        {/* Tool 1 */}
        <div className="bg-[#F4F6F6] border border-[#C8D2D4] p-6 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
        <div className="h-12 w-12 bg-[#e9f4f5] rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#27909c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1c1c21] mb-2">
            Secure Signups
          </h3>
          <p className="text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium font-[500]">
            Protect your waitlist with email verification, spam protection,
            and data encryption.
          </p>
        </div>

        {/* Tool 2 */}
        <div className="bg-[#F4F6F6] border border-[#C8D2D4] p-6 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
        <div className="h-12 w-12 bg-[#e9f4f5] rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#27909c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1c1c21] mb-2">
            Secure Signups
          </h3>
          <p className="text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium font-[500]">
            Protect your waitlist with email verification, spam protection,
            and data encryption.
          </p>
        </div>
        {/* Tool 3 */}
        <div className="bg-[#F4F6F6] border border-[#C8D2D4] p-6 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
        <div className="h-12 w-12 bg-[#e9f4f5] rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#27909c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1c1c21] mb-2">
            Secure Signups
          </h3>
          <p className="text-[#828A8C] leading-tight tracking-[0.1px] text-sm font-medium font-[500]">
            Protect your waitlist with email verification, spam protection,
            and data encryption.
          </p>
        </div>

      </div>
    </div>
  </section>;
};