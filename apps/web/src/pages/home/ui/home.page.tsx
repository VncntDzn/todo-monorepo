import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LeftPanel } from "../components/left-panel.component";

export const Home = () => {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="container mx-auto shadow-lg h-screen">
      <div className="h-14 bg-green-500 flex items-center gap-2 pl-2">
        <RxHamburgerMenu onClick={handleToggle} size={20} />
        <h1>TADAA</h1>
      </div>
      <div className={`${isToggled ? "flex" : "hidden"}`}>
        <LeftPanel onToggle={handleToggle} />
      </div>
      <div className="hidden">right panel</div>
    </div>
  );
};
