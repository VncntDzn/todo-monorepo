import { Home } from "@/pages/home";
import { MyDay } from "@/pages/home/ui/my_day-tasks.page";
import { PlannedTasks } from "@/pages/home/ui/planned-tasks.page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/my-day",
        Component: MyDay,
        index: true,
      },
      {
        path: "/planned-tasks",
        Component: PlannedTasks,
      },
    ],
  },
]);
