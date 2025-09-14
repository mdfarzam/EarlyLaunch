import { Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-primary-100 via-neutral-50 overflow-hidden h-full flex items-center">
      <div className="container mx-auto px-4 relative w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full flex flex-col gap-6">
            <div className="flex w-fit bg-primary-200 rounded-full px-4 py-1.5  text-sm font-medium text-primary-800 ">
              Easy waitlist. solid product
            </div>

            <h1 className="text-6xl font-medium text-[#181E1F] leading-[1.2] tracking-[-2.3px] ">
              Focus on building. <br /> We'll gather the crowd.
            </h1>

            <p className=" text-neutral-800 leading-tight tracking-[0.1px] text-base font-normal">
              Early Launch gives indie founders a no-code waitlist + templates,
              analytics and <br /> viral sharing so you can validate fast and
              move onto building.
            </p>

            <div className="flex flex-row gap-4">
              <button className="bg-primary-700 text-neutral-100  px-4 py-2 rounded-md text-base font-medium">
                Launch in minutes
              </button>

              <button className=" text-neutral-900 rounded-md text-base font-medium flex items-center justify-center">
                Watch demo
              </button>
            </div>
          </div>

          {/* image container */}
          <div className="absolute -top-12 right-45 translate-x-1/2 overflow-hidden hidden lg:block">
            <div className="rounded-2xl border-primary-700 border-8 w-[600px] h-[480px] overflow-hidden">
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
