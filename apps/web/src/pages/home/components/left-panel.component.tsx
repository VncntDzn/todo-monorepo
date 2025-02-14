import { RxHamburgerMenu } from "react-icons/rx";
import { WiDaySunny } from "react-icons/wi";

interface Props {
  onToggle: () => void;
}
export const LeftPanel = ({ onToggle }: Props) => {
  return (
    <div className="absolute h-lvh flex flex-col bg-gray-50 top-0 w-1/2 lg:max-w-1/5 shadow-xl">
      <div className="h-14 lg:h-28 sm:bg-green-500 lg:bg-inherit px-2 gap-2 flex flex-col border-b border-gray-300 lg:mt-5">
        <div className="flex justify-between items-center h-14 lg:flex-row-reverse">
          <RxHamburgerMenu onClick={onToggle} size={20} />
          <div className="hidden lg:flex px-2">
            <h1 className="font-bold text-2xl">MENU</h1>
          </div>
        </div>

        <div className="self-center hidden lg:flex w-full">
          <input className=" border w-full p-2 rounded my-3 mx-2" placeholder="Search here..." />
        </div>
      </div>
      <div className="w-full h-full flex flex-col px-2 gap-2">
        <div className="overflow-y-auto flex-auto border-b border-gray-300">
          <h1 className="font-bold text-lg mt-3">TASKS</h1>
          <ul className="flex flex-col">
            <li className="flex items-center gap-3 py-2 hover:bg-gray-200 hover:py-2 rounded">
              <WiDaySunny size={20} />

              <span>My Day</span>
            </li>
            <li className="flex items-center gap-3 py-2 hover:bg-gray-200 hover:py-2 rounded">
              <WiDaySunny size={20} />

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
        <div className="overflow-y-auto flex-none">
          <ul>
            <li>Settings</li>
            <li>Sign out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
