"use client";

import { useState, useTransition } from "react";
import { Select, Space, Typography, Spin } from "antd";
import type { SelectProps } from "antd";

const { Title } = Typography;

type Family = {
  id: number;
  label: string;
};

type Process = {
  id: number;
  label: string;
};

type FamilyProcessSelectionProps = {
  families: Family[];
  processes: Process[];
  onSelectionComplete: (familyId: number, processId: number) => Promise<void>;
};

export default function FamilyProcessSelection({
  families,
  processes,
  onSelectionComplete,
}: Readonly<FamilyProcessSelectionProps>) {
  const [selectedFamily, setSelectedFamily] = useState<number | null>(null);
  const [selectedProcess, setSelectedProcess] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  const familyOptions: SelectProps["options"] = families.map((family) => ({
    label: family.label,
    value: family.id,
  }));

  const processOptions: SelectProps["options"] = processes.map((process) => ({
    label: process.label,
    value: process.id,
  }));

  const handleFamilyChange = (value: number) => {
    setSelectedFamily(value);
    // Reset process selection when family changes
    setSelectedProcess(null);
  };

  const handleProcessChange = (value: number) => {
    setSelectedProcess(value);

    // If both family and process are selected, fetch hierarchy list
    if (selectedFamily) {
      startTransition(() => {
        onSelectionComplete(selectedFamily, value);
      });
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm mb-4">
      <Title level={4}>Selection</Title>
      <Space size="large" className="w-full">
        <div className="w-64">
          <label className="block mb-2 text-sm font-medium">Family</label>
          <Select
            placeholder="Select a family"
            style={{ width: "100%" }}
            options={familyOptions}
            value={selectedFamily}
            onChange={handleFamilyChange}
          />
        </div>
        <div className="w-64">
          <label className="block mb-2 text-sm font-medium">Process</label>
          <Select
            placeholder="Select a process"
            style={{ width: "100%" }}
            options={processOptions}
            value={selectedProcess}
            onChange={handleProcessChange}
            disabled={!selectedFamily}
          />
        </div>
        {isPending && <Spin size="small" />}
      </Space>
    </div>
  );
}
