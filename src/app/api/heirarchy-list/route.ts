// import { TreeDataNode } from "antd";

// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const family = url.searchParams.get("family");
//   const process = url.searchParams.get("process");
//   if (!family && !process)
//     return new Response(JSON.stringify({ error: "Something went wrong" }), {
//       status: 400,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//   const treeData: TreeDataNode[] = [
//     {
//       title: "parent 1",
//       key: "0-0",
//       children: [
//         {
//           title: "parent 1-0",
//           key: "0-0-0",
//           // disabled: true,
//           children: [
//             {
//               title: "leaf",
//               key: "0-0-0-0",
//               // disableCheckbox: true,
//             },
//             {
//               title: "leaf",
//               key: "0-0-0-1",
//             },
//           ],
//         },
//         {
//           title: "parent 1-1",
//           key: "0-0-1",
//           children: [
//             {
//               title: "sss",
//               key: "0-0-1-0",
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   return new Response(JSON.stringify(treeData), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { familyId, processId } = body;

  // Validate input
  if (!familyId || !processId) {
    return NextResponse.json({ error: "Family ID and Process ID are required" }, { status: 400 });
  }

  // Simulate different hierarchy trees based on selections
  const hierarchyData = generateHierarchyTree(familyId, processId);

  // Add a small delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(hierarchyData);
}

function generateHierarchyTree(familyId: number, processId: number) {
  // Create a deterministic but different tree based on the inputs
  return {
    id: `root-${familyId}-${processId}`,
    title: `${familyId === 1 ? "Family A" : familyId === 2 ? "Family B" : "Family C"} - ${
      processId === 1 ? "Process X" : processId === 2 ? "Process Y" : "Process Z"
    }`,
    children: [
      {
        id: `node-${familyId}-1`,
        title: `Department ${familyId}.1`,
        children: [
          { id: `leaf-${familyId}-${processId}-1`, title: `Task ${familyId}.${processId}.1` },
          { id: `leaf-${familyId}-${processId}-2`, title: `Task ${familyId}.${processId}.2` },
        ],
      },
      {
        id: `node-${familyId}-2`,
        title: `Department ${familyId}.2`,
        children: [
          { id: `leaf-${familyId}-${processId}-3`, title: `Task ${familyId}.${processId}.3` },
          { id: `leaf-${familyId}-${processId}-4`, title: `Task ${familyId}.${processId}.4` },
        ],
      },
    ],
  };
}
