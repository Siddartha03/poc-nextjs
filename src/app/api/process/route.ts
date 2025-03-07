export async function GET() {
  const data2 = [
    { id: "a", value: "a", label: "Process A" },
    { id: "b", value: "b", label: "Process B" },
    { id: "c", value: "c", label: "Process C" },
  ];

  return new Response(JSON.stringify(data2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
