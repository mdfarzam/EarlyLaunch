export const Footer = () => {
  return (
    <footer className="bg-[#0C2B2F] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-[#BEDEE1] uppercase tracking-wider">
            FEATURES
          </span>
          <h2 className="text-5xl text-[#E9EDEE] font-medium tracking-tight leading-[1.1] mb-4">
            Built for Growth,
            <br />
            From Day One
          </h2>
          <p className="text-[#D3DBDD] max-w-2xl mx-auto text-base font-roboto font-[400] leading-tight tracking-[0.1px]">
            A toolkit crafted to help you attract, manage and activate your <br /> audience without complexity
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col max-w-full px-[11%] pb-16 gap-4">
          {/* Row 1 */}
          <div className="flex flex-row gap-4 h-[300px]">
            {/* Card 1 */}
            <div className="w-[50%] bg-[#103A3E] rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
              <div className="flex-1 flex items-center justify-center p-2">
                {/* optional icon/image */}
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-[#EEF1F2] text-base font-medium leading-tight tracking-[0.1px] mb-2">
                  Seamless Setup & Integrations
                </h3>
                <p className="text-[#A5AEB0] text-sm font-medium font-[400] leading-tight tracking-[0.1px]">
                  Connect with your stack and launch your waitlist in minutes.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[50%] bg-[#103A3E] rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
              <div className="flex-1 flex items-center justify-center p-2">
                {/* optional icon/image */}
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-[#EEF1F2] text-base font-medium leading-tight tracking-[0.1px] mb-2">
                  Social Media Tool Connect
                </h3>
                <p className="text-[#A5AEB0] text-sm font-medium font-[400] leading-tight tracking-[0.1px]">
                  Integrate directly with platforms to boost reach.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-row gap-4 h-[300px]">
            {/* Card 3 */}
            <div className="w-[40%] bg-[#103A3E] rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
              <div className="flex-1 flex items-center justify-center p-2">
                {/* optional icon/image */}
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-[#EEF1F2] text-base font-medium  leading-tight tracking-[0.1px] mb-2">
                  Export & User Data Leads
                </h3>
                <p className="text-[#A5AEB0] text-sm font-medium font-[400] leading-tight tracking-[0.1px]">
                  Download subscriber data and plug into your CRM
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-[60%] bg-[#103A3E] rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
              <div className="flex-1 flex items-center justify-center p-2">
                {/* optional icon/image */}
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-[#EEF1F2] text-base font-medium leading-tight tracking-[0.1px] mb-2">
                  Smart Automation
                </h3>
                <p className="text-[#A5AEB0]  text-sm font-medium font-[400] leading-tight tracking-[0.1px]">
                  Set up triggered campaigns and engage users at the perfect moment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#103A3E] pt-8 flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <a href="/" className="text-lg font-semibold flex items-center tracking-tight">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#27909c"
                />
                <path
                  d="M8 12L11 15L16 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Earlylaunch
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-[#A5AEB0] font-roboto font-[500] tracking-[0.2px]">
            © {new Date().getFullYear()} Earlylaunch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
