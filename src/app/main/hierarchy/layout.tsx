import React from "react";
// import FamilyProcessSelection from "./family-process-selection";
// import HierarchyList from "./hierarchy-list";
// import { Divider } from "antd";

const HierarchyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <div className="flex flex-row h-dvh">
      <div className="flex flex-col gap-4 p-2">
        <div>
          <FamilyProcessSelection />
        </div>
        <div>
          <HierarchyList />
        </div>
      </div>
      <Divider
        orientation="center"
        type="vertical"
        style={{ height: "100%" }}
      /> */}
      {children}
    </div>
  );
};

export default HierarchyLayout;
