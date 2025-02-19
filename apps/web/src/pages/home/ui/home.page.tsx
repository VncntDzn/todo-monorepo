import { Outlet } from "react-router";
import { LeftPanel } from "../components/left-panel.component";

export const Home = () => {
  return (
    <div className="container mx-auto shadow-lg h-screen flex flex-col lg:flex-row lg:gap-2">
      <div className={`w-full lg:flex lg:w-1/4`}>
        <LeftPanel />
      </div>
      <div className="flex flex-1 w-full">
        <Outlet />
      </div>
    </div>
  );
};
