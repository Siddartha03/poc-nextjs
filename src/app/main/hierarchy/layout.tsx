import React from "react";
import FamilyProcessSelection from "./family-process-selection";
import HierarchyList from "./hierarchy-list";
import HierarchyContent from "./hierarchy-content";
import { Divider } from "antd";

const HierarchyLayout = () => {
  return (
    <div className="flex flex-row h-dvh">
      <div className="flex flex-col gap-4 p-2">
        <div>
          <FamilyProcessSelection />
        </div>
        <div>
          <HierarchyList />
        </div>
      </div>
      <Divider orientation="center" type="vertical" style={{ height: "100%" }} />
      <div className="heirarchy-content">
        <HierarchyContent />
      </div>
    </div>
  );
};

export default HierarchyLayout;
