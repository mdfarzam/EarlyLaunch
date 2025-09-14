import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  {
    label: "Products",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Waitlist Builder" },
      { href: "#", label: "Analytics Dashboard" },
      { href: "#", label: "Viral Sharing" },
      { href: "#", label: "Templates" },
    ],
  },
  {
    label: "Resources",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Documentation" },
      { href: "#", label: "Tutorials" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Help Center" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
]

export default function Navbar() {
  return (
    <header className="bg-primary-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="group size-8 md:hidden bg-transparent border-none cursor-pointer p-2"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-64 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        {link.submenu ? (
                          <>
                            <div className="text-neutral-600 px-2 py-1.5 text-sm font-medium">
                              {link.label}
                            </div>
                            <ul>
                              {link.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <NavigationMenuLink
                                    href={item.href}
                                    className="py-1.5 text-neutral-800 hover:text-primary-700"
                                  >
                                    {item.label}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <NavigationMenuLink href={link.href} className="py-1.5 text-neutral-800 hover:text-primary-700">
                            {link.label}
                          </NavigationMenuLink>
                        )}
                        {/* Add separator between different types of items */}
                        {index < navigationLinks.length - 1 &&
                          // Show separator if:
                          // 1. One is submenu and one is simple link OR
                          // 2. Both are submenus but with different types
                          ((!link.submenu &&
                            navigationLinks[index + 1].submenu) ||
                            (link.submenu &&
                              !navigationLinks[index + 1].submenu) ||
                            (link.submenu &&
                              navigationLinks[index + 1].submenu &&
                              link.type !== navigationLinks[index + 1].type)) && (
                            <div
                              role="separator"
                              aria-orientation="horizontal"
                              className="bg-border -mx-1 my-1 h-px w-full"
                            />
                          )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_20_7145)">
                  <path d="M11.9998 0C18.6274 0 23.9998 5.3724 23.9998 12V20.4C23.9998 21.3548 23.6205 22.2705 22.9453 22.9456C22.2702 23.6207 21.3545 24 20.3998 24H12.5998V18.7356C12.5998 17.5344 12.673 16.29 13.303 15.2676C13.754 14.5349 14.3574 13.9078 15.0721 13.4288C15.7868 12.9498 16.5962 12.6301 17.4454 12.4914L17.6752 12.4542C17.7699 12.4218 17.8521 12.3606 17.9104 12.2792C17.9686 12.1977 17.9999 12.1001 17.9999 12C17.9999 11.8999 17.9686 11.8023 17.9104 11.7208C17.8521 11.6394 17.7699 11.5782 17.6752 11.5458L17.4454 11.5086C16.2047 11.3059 15.059 10.7187 14.17 9.82973C13.2811 8.94079 12.6938 7.7951 12.4912 6.5544L12.454 6.3246C12.4216 6.22986 12.3604 6.14762 12.2789 6.08939C12.1975 6.03116 12.0999 5.99985 11.9998 5.99985C11.8996 5.99985 11.802 6.03116 11.7206 6.08939C11.6391 6.14762 11.5779 6.22986 11.5456 6.3246L11.5084 6.5544C11.3697 7.40356 11.05 8.21297 10.571 8.92771C10.092 9.64244 9.46489 10.2458 8.73216 10.6968C7.70976 11.3268 6.46536 11.4 5.26416 11.4H0.0141602C0.32796 5.0514 5.57376 0 11.9998 0Z" fill="#17565E" />
                  <path d="M0 12.6H5.2644C6.4656 12.6 7.71 12.6732 8.7324 13.3032C9.53158 13.7957 10.2043 14.4684 10.6968 15.2676C11.3268 16.29 11.4 17.5344 11.4 18.7356V24H3.6C2.64522 24 1.72955 23.6207 1.05442 22.9456C0.379285 22.2705 0 21.3548 0 20.4L0 12.6ZM24 1.2C24 1.51826 23.8736 1.82348 23.6485 2.04853C23.4235 2.27357 23.1183 2.4 22.8 2.4C22.4817 2.4 22.1765 2.27357 21.9515 2.04853C21.7264 1.82348 21.6 1.51826 21.6 1.2C21.6 0.88174 21.7264 0.576516 21.9515 0.351472C22.1765 0.126428 22.4817 0 22.8 0C23.1183 0 23.4235 0.126428 23.6485 0.351472C23.8736 0.576516 24 0.88174 24 1.2Z" fill="#17565E" />
                </g>
                <defs>
                  <clipPath id="clip0_20_7145">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-xl text-primary-700">Earlylaunch</span>
            </div>
          </div>

          {/* Center - Navigation menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-8">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-neutral-800 hover:text-primary-700 bg-transparent px-3 py-2 text-base font-medium *:[svg]:-me-0.5 *:[svg]:size-5">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                          <ul
                            className={cn(
                              link.type === "description"
                                ? "min-w-64"
                                : "min-w-48"
                            )}
                          >
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-2 px-3 hover:bg-primary-50 rounded-md transition-colors"
                                >
                                  <span className="text-neutral-800">{item.label}</span>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className="text-neutral-800 hover:text-primary-700 py-2 px-3 text-base font-medium rounded-md hover:bg-primary-50 transition-colors"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="text-neutral-900 rounded-md text-base font-medium flex items-center justify-center px-3 py-2 hover:bg-primary-50 transition-colors"
            >
              Login
            </a>
            <a
              href="/get-started"
              className="bg-primary-700 text-neutral-100 px-4 py-2 rounded-md text-base font-medium hover:bg-primary-800 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
