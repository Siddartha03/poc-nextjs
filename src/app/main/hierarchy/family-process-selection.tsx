"use client";

import { Select, Space } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FamilyProcessSelection = () => {
  const router = useRouter();

  const [select1, setSelect1] = useState<string>("");
  const [select2, setSelect2] = useState<string>("");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const fetchData = async () => {
    const res1 = await fetch("/api/family");
    const data1 = await res1.json();
    console.log(data1);

    setData1(data1);

    const res2 = await fetch("/api/process");
    const data2 = await res2.json();
    setData2(data2);
  };

  const handleFamilyChange = (val: string) => {
    setSelect1(val);
    const queryParams = new URLSearchParams();
    if (val) queryParams.append("family", val);
    if (select2) queryParams.set("process", select2);
    router.push(`/main/hierarchy/?${queryParams.toString()}`);
  };

  const handleProcessChange = (val: string) => {
    setSelect2(val);
    const queryParams = new URLSearchParams();
    if (val) queryParams.append("process", val);
    if (select1) queryParams.set("family", select1);
    router.push(`/main/hierarchy/?${queryParams.toString()}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-3 flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <label htmlFor="select1">Family</label>
        <Space direction="vertical">
          <Select
            id="select1"
            value={select1}
            onChange={handleFamilyChange}
            style={{ width: 200 }}
            placeholder="Select an option"
            options={data1}
          />
        </Space>
      </div>

      <div className="flex flex-row gap-2 items-center">
        <label htmlFor="select2">Process</label>
        <Space direction="vertical">
          <Select
            id="select2"
            value={select2}
            onChange={handleProcessChange}
            style={{ width: 200 }}
            placeholder="Select an option"
            options={data2}
          />
        </Space>
      </div>
    </div>
  );
};

export default FamilyProcessSelection;
