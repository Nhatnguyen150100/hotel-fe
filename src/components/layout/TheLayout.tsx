import { Outlet } from "react-router-dom";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
import ScrollToTop from "../base/ScrollToTop";

export default function TheLayout() {
  return (
    <div className="h-full w-full flex flex-col justify-start items-center overflow-y-auto bg-[#f4f4f5]">
      <TheHeader />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <TheFooter />
    </div>
  );
}
