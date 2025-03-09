"use server";

type Family = {
  id: number;
  label: string;
};

type Process = {
  id: number;
  label: string;
};

type HierarchyNode = {
  id: string;
  title: string;
  children?: HierarchyNode[];
};

type HierarchyContent = {
  id: string;
  title: string;
  description: string;
  details: Array<{ key: string; value: string }>;
  summary: string;
};

export async function getFamilies(): Promise<Family[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/family`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch families");
  }
  const res = response.json();

  return res;
}

export async function getProcesses(): Promise<Process[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/process`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch processes");
  }

  return response.json();
}

export async function getHierarchyList(
  familyId: number,
  processId: number
): Promise<HierarchyNode> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/heirarchy-list`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ familyId, processId }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch hierarchy list");
  }

  return response.json();
}

export async function getHierarchyContent(id: string): Promise<HierarchyContent> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/heirarchy-content`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch hierarchy content");
  }

  return response.json();
}
