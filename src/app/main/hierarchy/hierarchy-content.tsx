"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Type {
  id: string;
  title: string;
  count: number;
}
const HierarchyContent = () => {
  const searchParams = useSearchParams();
  const family = searchParams.get("family") || "";
  const process = searchParams.get("process") || "";
  const id = searchParams.get("id") || "";
  const [content, setContent] = useState<Type | null>(null);

  const fetchHeirarchyData = async () => {
    const res = await fetch(`/api/heirarchy-content?id=${id}`);
    if (res.status === 200) {
      const data = await res.json();
      setContent(data);
    }
  };

  useEffect(() => {
    if (family && process && id) {
      fetchHeirarchyData();
    }
  }, [id]);

  return (
    <>
      {content && (
        <div>
          <h1>{content.id}</h1>
          <h2>{content.title}</h2>
          <p>{content.count}</p>
        </div>
      )}
    </>
  );
};

export default HierarchyContent;
