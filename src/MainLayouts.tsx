import { Outlet } from "react-router";

function MainLayouts() {
  return (
    <div>
      <h1>Main Layouts</h1>
      <Outlet />
    </div>
  );
}

export default MainLayouts;