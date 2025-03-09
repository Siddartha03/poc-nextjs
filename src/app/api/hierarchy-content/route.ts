// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const id = url.searchParams.get("id");

//   if (!id) {
//     return new Response(JSON.stringify({ error: "Something went wrong" }), {
//       status: 400,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   const data = {
//     id,
//     title: "parent 1",
//     count: 20,
//   };
//   return new Response(JSON.stringify(data), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { id } = body;

  // Validate input
  if (!id) {
    return NextResponse.json({ error: "Node ID is required" }, { status: 400 });
  }

  // Simulate content based on node ID
  const content = {
    id,
    title: `Content for ${id}`,
    description: `This is the detailed content for node with ID ${id}.`,
    details: [
      { key: "Created On", value: "2025-03-01" },
      { key: "Last Modified", value: "2025-03-08" },
      { key: "Status", value: id.includes("leaf") ? "Active" : "In Progress" },
      { key: "Priority", value: Math.random() > 0.5 ? "High" : "Medium" },
    ],
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Node ${id} represents a significant part of the hierarchy structure. This content provides details about its purpose, status, and related information.`,
  };

  // Add a small delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json(content);
}
