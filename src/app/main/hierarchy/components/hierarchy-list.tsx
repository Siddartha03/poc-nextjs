"use client";

import { useState, useTransition } from "react";
import { Tree, Card, Typography, Spin } from "antd";
import type { DataNode } from "antd/es/tree";

const { Title } = Typography;

type HierarchyNode = {
  id: string;
  title: string;
  children?: HierarchyNode[];
};

type HierarchyListProps = {
  hierarchyData: HierarchyNode | null;
  onNodeSelect: (id: string) => Promise<void>;
};

export default function HierarchyList({ hierarchyData, onNodeSelect }: HierarchyListProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Convert the hierarchyData to Ant Design Tree format
  const convertToTreeData = (node: HierarchyNode): DataNode => ({
    key: node.id,
    title: node.title,
    children: node.children?.map((child) => convertToTreeData(child)),
  });

  const treeData = hierarchyData ? [convertToTreeData(hierarchyData)] : [];

  const handleSelect = (selectedKeys: React.Key[], info: any) => {
    if (selectedKeys.length > 0) {
      const nodeId = selectedKeys[0].toString();
      setSelectedNode(nodeId);

      startTransition(() => {
        onNodeSelect(nodeId);
      });
    }
  };

  if (!hierarchyData) {
    return (
      <Card className="h-96 flex items-center justify-center">
        <Typography.Text type="secondary">
          Select a family and process to view the hierarchy
        </Typography.Text>
      </Card>
    );
  }

  return (
    <Card className="mb-4">
      <div className="flex items-center justify-between mb-4">
        <Title level={4}>Hierarchy Tree</Title>
        {isPending && <Spin size="small" />}
      </div>
      <Tree
        defaultExpandAll
        showLine
        showIcon
        onSelect={handleSelect}
        treeData={treeData}
        selectedKeys={selectedNode ? [selectedNode] : []}
      />
    </Card>
  );
}
