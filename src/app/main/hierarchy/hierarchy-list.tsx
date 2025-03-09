"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tree, TreeDataNode, TreeProps } from "antd";

const HierarchyList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const family = searchParams.get("family") || "";
  const process = searchParams.get("process") || "";
  const [treeData, setTreeData] = useState<TreeDataNode[]>([]);

  const fetchData = async () => {
    const res = await fetch(
      `/api/heirarchy-list?process=${process}&family=${family}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setTreeData(data);
    }
  };

  useEffect(() => {
    if (family && process) {
      fetchData();
    }
  }, [family, process]);

  // const treeData: TreeDataNode[] = [
  //   {
  //     title: "parent 1",
  //     key: "0-0",
  //     children: [
  //       {
  //         title: "parent 1-0",
  //         key: "0-0-0",
  //         // disabled: true,
  //         children: [
  //           {
  //             title: "leaf",
  //             key: "0-0-0-0",
  //             // disableCheckbox: true,
  //           },
  //           {
  //             title: "leaf",
  //             key: "0-0-0-1",
  //           },
  //         ],
  //       },
  //       {
  //         title: "parent 1-1",
  //         key: "0-0-1",
  //         children: [
  //           {
  //             title: <span style={{ color: "#1677ff" }}>sss</span>,
  //             key: "0-0-1-0",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    const queryParams = new URLSearchParams();
    queryParams.append("family", family);
    queryParams.set("process", process);
    queryParams.set("id", info.selectedNodes[0].key as string);
    router.push(`/main/hierarchy/?${queryParams.toString()}`);
  };

  // const onCheck: TreeProps["onCheck"] = (checkedKeys, info) => {
  //   console.log("onCheck", checkedKeys, info);
  // };

  return (
    <div>
      <Tree
        // checkable
        defaultExpandedKeys={[]}
        defaultSelectedKeys={[]}
        defaultCheckedKeys={[]}
        onSelect={onSelect}
        // onCheck={onCheck}
        treeData={treeData}
      />
    </div>
  );
};

export default HierarchyList;
