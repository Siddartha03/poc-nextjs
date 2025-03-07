export async function GET() {
  const data1 = [
    { id: "1", value: 1, label: "Family 1" },
    { id: "2", value: 2, label: "Family 2" },
    { id: "3", value: 3, label: "Family 3" },
  ];

  return new Response(JSON.stringify(data1), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
