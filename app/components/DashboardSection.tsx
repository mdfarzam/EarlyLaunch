
export const DashboardSection = () => {
  return <section className="py-16 bg-[#fafbfb]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="bg-[#e9f4f5] p-6 rounded-lg inline-block">
              <img src="https://placehold.co/500x400/e9f4f5/27909c?text=Dashboard" alt="Dashboard interface" className="rounded-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1c1c21] mb-6">
              Control everything from one simple dashboard
            </h3>
            <p className="text-[#4b4b52] mb-6">
              Monitor your waitlist growth, audience behavior, conversion rates,
              and more. Make data-driven decisions about your product launch
              with our comprehensive analytics.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#27909c] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[#4b4b52]">Real-time analytics & trends</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#27909c] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[#4b4b52]">
                  Segment follow-ups and campaigns
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#27909c] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[#4b4b52]">Personalize user journeys</p>
              </div>
            </div>
            <a href="/features" className="bg-[#27909c] hover:bg-[#1e7a85] text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
              Explore Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>;
};