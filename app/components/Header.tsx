export const Header = () => {
  return (
    <header className="bg-[#D0F4F5] py-4">
      <div className="container mx-auto px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-medium text-[#17565E]">Earlylaunch</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          <div className="relative group">
            <button className="text-[#5E6667] text-2sm font-medium font-[500] flex items-center">
              Products
            </button>
          </div>

          <div className="relative group">
            <button className="text-[#5E6667] text-2sm font-medium font-[500] flex items-center">
              Resources
            </button>
          </div>

          <a
            href="/pricing"
            className="text-[#5E6667] text-2sm font-medium font-[500] flex items-center"
          >
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="text-gray-700 font-medium hover:text-gray-900"
          >
            Login
          </a>
          <a
            href="/get-started"
            className="bg-[#17565E] text-white px-4 py-2 rounded-md font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};
