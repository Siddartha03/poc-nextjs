"use client";

import { useCallback, useState, Suspense } from "react";
import { Skeleton } from "antd";
import { getHierarchyList, getHierarchyContent } from "./actions";
import FamilyProcessSelection from "./components/family-process-selection";
import HierarchyList from "./components/hierarchy-list";
import HierarchyContent from "./components/hierarchy-content";

type Family = {
  id: number;
  label: string;
};

type Process = {
  id: number;
  label: string;
};

type ClientWrapperProps = {
  families: Family[];
  processes: Process[];
};

export default function ClientWrapper({ families, processes }: Readonly<ClientWrapperProps>) {
  const [hierarchyData, setHierarchyData] = useState<Awaited<
    ReturnType<typeof getHierarchyList>
  > | null>(null);
  const [contentData, setContentData] = useState<Awaited<
    ReturnType<typeof getHierarchyContent>
  > | null>(null);

  const handleSelectionComplete = useCallback(async (familyId: number, processId: number) => {
    // Reset content when selection changes
    setContentData(null);

    try {
      const data = await getHierarchyList(familyId, processId);
      setHierarchyData(data);
    } catch (error) {
      console.error("Error fetching hierarchy data:", error);
    }
  }, []);

  const handleNodeSelect = useCallback(async (nodeId: string) => {
    try {
      const data = await getHierarchyContent(nodeId);
      setContentData(data);
    } catch (error) {
      console.error("Error fetching node content:", error);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
      <div className="lg:col-span-6">
        <Suspense fallback={<Skeleton active />}>
          <FamilyProcessSelection
            families={families}
            processes={processes}
            onSelectionComplete={handleSelectionComplete}
          />
        </Suspense>
      </div>

      <div className="lg:col-span-2">
        <Suspense fallback={<Skeleton active className="h-96" />}>
          <HierarchyList hierarchyData={hierarchyData} onNodeSelect={handleNodeSelect} />
        </Suspense>
      </div>

      <div className="lg:col-span-4">
        <Suspense fallback={<Skeleton active className="h-64" />}>
          <HierarchyContent content={contentData} />
        </Suspense>
      </div>
    </div>
  );
}
