import { TreeDataNode } from "antd";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const family = url.searchParams.get("family");
  const process = url.searchParams.get("process");
  if (!family && !process)
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });

  const treeData: TreeDataNode[] = [
    {
      title: "parent 1",
      key: "0-0",
      children: [
        {
          title: "parent 1-0",
          key: "0-0-0",
          // disabled: true,
          children: [
            {
              title: "leaf",
              key: "0-0-0-0",
              // disableCheckbox: true,
            },
            {
              title: "leaf",
              key: "0-0-0-1",
            },
          ],
        },
        {
          title: "parent 1-1",
          key: "0-0-1",
          children: [
            {
              title: "sss",
              key: "0-0-1-0",
            },
          ],
        },
      ],
    },
  ];

  return new Response(JSON.stringify(treeData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
