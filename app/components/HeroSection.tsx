import { Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#D0F4F5] via-[#DCF1F2] pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-16 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full mb-10">
            <div className="inline-block bg-[#A9D3D7] rounded-full px-4 py-1.5 font-[500] text-sm font-medium text-green-950/80 mb-6">
              Easy waitlist. solid product
            </div>

            <h1 className="text-6xl font-medium font-[600] text-[#181E1F] leading-[1.2] tracking-[-2.3px] mb-4">
              Focus on building. <br /> We'll gather the crowd.
            </h1>

            <p className="mb-6 text-[#5E6667] leading-tight tracking-[0.1px] text-sm font-[600]">
              Early Launch gives indie founders a no-code waitlist + templates,
              analytics and <br /> viral sharing so you can validate fast and
              move onto building.
            </p>

            <div className="flex flex-row gap-3">
              <button className="bg-[#17565E] text-white px-4 py-1.5 rounded-md text-sm font-medium">
                Launch in minutes
              </button>

              <button className="border border-[#1c1c21] text-[#1c1c21] px-4 py-1.5 rounded-md text-sm font-medium flex items-center justify-center">
                <Play size={16} className="mr-2" />
                Watch demo
              </button>
            </div>
          </div>

          {/* image container */}
          <div className="absolute -top-12 right-45 translate-x-1/2 overflow-hidden hidden lg:block">
            <div className="rounded-2xl border border-[#17565E] border-[7px] w-[600px] h-[480px] overflow-hidden">
              <img
                src="/dashboard2.jpeg"
                alt="Dashboard preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
