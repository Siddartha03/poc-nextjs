export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const data = {
    id,
    title: "parent 1",
    count: 20,
  };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
