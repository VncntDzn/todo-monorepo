import { useState } from "react";
import {
  MdOutlineCalendarMonth,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineWbSunny,
} from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router";
export const LeftPanel = () => {
  const router = useNavigate();
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="w-full">
      <div className="h-14 bg-green-500 flex items-center w-full gap-3 lg:hidden">
        <RxHamburgerMenu onClick={handleToggle} size={20} />
        <h1>TADAA</h1>
      </div>

      <div
        className={`${
          isToggled ? "absolute" : "hidden"
        } lg:flex h-full flex flex-col bg-gray-50 top-0 w-full shadow-xl`}
      >
        <div className="bg-green-500 h-14 lg:h-28 lg:bg-inherit px-2 gap-2 flex flex-col border-b border-gray-300 lg:mt-5">
          <div className="flex justify-between items-center h-14 lg:flex-row-reverse">
            <div className="flex items-center gap-3 lg:hidden">
              <RxHamburgerMenu onClick={handleToggle} size={20} />
              <h1>TADAA</h1>
            </div>

            <div className="hidden lg:flex px-2">
              <h1 className="font-bold text-2xl">MENU</h1>
            </div>
          </div>

          <div className="self-center hidden lg:flex w-full">
            <input
              className=" border w-full p-2 rounded my-3 mx-2"
              placeholder="Search here..."
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col px-5 gap-2">
          <div className="overflow-y-auto flex-auto border-b border-gray-300">
            <h1 className="font-bold text-md mt-3">TASKS</h1>
            <ul className="flex flex-col">
              <li
                className="flex items-center gap-3 py-2 hover:bg-gray-200 rounded hover:font-bold"
                onClick={() => router("/my-day")}
              >
                <MdOutlineWbSunny size={18} />

                <span>My Day</span>
              </li>
              <li
                className="flex items-center gap-3 py-2 hover:bg-gray-200 rounded hover:font-bold"
                onClick={() => router("/planned-tasks")}
              >
                <MdOutlineCalendarMonth size={18} />

                <span>Planned</span>
              </li>
            </ul>
          </div>
          <div className="overflow-y-auto flex-1 border-b border-gray-300">
            <h1 className="font-bold text-lg">LISTS</h1>
            <ul>
              <li>List 1</li>
              <li>List 2</li>
            </ul>
          </div>
          <div className="overflow-y-auto flex-none pb-5">
            <ul className="flex flex-col">
              <li className="flex items-center gap-3 py-2 hover:bg-gray-200 rounded hover:font-bold">
                <MdOutlineSettings size={18} />
                Settings
              </li>
              <li className="flex items-center gap-3 py-2 hover:bg-gray-200 rounded hover:font-bold">
                <MdOutlineLogout size={18} />
                Sign out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
