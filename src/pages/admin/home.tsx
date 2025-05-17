import LayoutAdmin from "@/components/LayoutAdmin";

export default function Home() {
  return (
    <LayoutAdmin>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">2</div>
              </div>
              <div className="text-sm font-medium text-gray-400">Users</div>
            </div>
            <div className="dropdown relative">
              <button className="dropdown-toggle text-gray-400 hover:text-gray-600">
                <i className="ri-more-fill"></i>
              </button>
              <ul className="dropdown-menu absolute right-0 top-full mt-2 hidden py-1.5 rounded-md bg-white border border-gray-100 shadow-md shadow-black/5 w-[140px] z-30">
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="/gebruikers"
            className="text-[#f84525] font-medium text-sm hover:text-red-800"
            target="_blank"
          >
            View
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-4">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">100</div>
                <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                  +30%
                </div>
              </div>
              <div className="text-sm font-medium text-gray-400">Companies</div>
            </div>
            <div className="dropdown relative">
              <button className="dropdown-toggle text-gray-400 hover:text-gray-600">
                <i className="ri-more-fill"></i>
              </button>
              <ul className="dropdown-menu absolute right-0 top-full mt-2 hidden py-1.5 rounded-md bg-white border border-gray-100 shadow-md shadow-black/5 w-[140px] z-30">
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="/dierenartsen"
            className="text-[#f84525] font-medium text-sm hover:text-red-800"
            target="_blank"
          >
            View
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">100</div>
              <div className="text-sm font-medium text-gray-400">Blogs</div>
            </div>
            <div className="dropdown relative">
              <button className="dropdown-toggle text-gray-400 hover:text-gray-600">
                <i className="ri-more-fill"></i>
              </button>
              <ul className="dropdown-menu absolute right-0 top-full mt-2 hidden py-1.5 rounded-md bg-white border border-gray-100 shadow-md shadow-black/5 w-[140px] z-30">
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    className="block text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    href="#"
                    target="_blank"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="#"
            className="text-[#f84525] font-medium text-sm hover:text-red-800"
            target="_blank"
          >
            View
          </a>
        </div>
      </div>
    </LayoutAdmin>
  );
}
