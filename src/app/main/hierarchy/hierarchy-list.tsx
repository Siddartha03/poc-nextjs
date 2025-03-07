"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tree, TreeDataNode, TreeProps } from "antd";

const HierarchyList = () => {
  const searchParams = useSearchParams();

  const family = searchParams.get("family") || "";
  const process = searchParams.get("process") || "";

  useEffect(() => {
    if (family && process) {
      // Call list api
      console.log(family, process);
    }
  }, [family, process]);

  const treeData: TreeDataNode[] = [
    {
      title: "parent 1",
      key: "0-0",
      children: [
        {
          title: "parent 1-0",
          key: "0-0-0",
          disabled: true,
          children: [
            {
              title: "leaf",
              key: "0-0-0-0",
              disableCheckbox: true,
            },
            {
              title: "leaf",
              key: "0-0-0-1",
            },
          ],
        },
        {
          title: "parent 1-1",
          key: "0-0-1",
          children: [{ title: <span style={{ color: "#1677ff" }}>sss</span>, key: "0-0-1-0" }],
        },
      ],
    },
  ];

  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  return (
    <div>
      <Tree
        // checkable
        defaultExpandedKeys={[]}
        defaultSelectedKeys={[]}
        defaultCheckedKeys={[]}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
      />
    </div>
  );
};

export default HierarchyList;
