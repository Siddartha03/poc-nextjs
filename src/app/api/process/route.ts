// export async function GET() {
//   const data2 = [
//     { id: "a", value: "a", label: "Process A" },
//     { id: "b", value: "b", label: "Process B" },
//     { id: "c", value: "c", label: "Process C" },
//   ];

//   return new Response(JSON.stringify(data2), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

import { NextResponse } from "next/server";

export async function GET() {
  // Simulate API data
  const processes = [
    { id: "a", value: "a", label: "Process A" },
    { id: "b", value: "b", label: "Process B" },
    { id: "c", value: "c", label: "Process C" },
  ];

  // Add a small delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json(processes);
}
