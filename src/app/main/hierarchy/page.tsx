import { Suspense } from "react";
import { Skeleton } from "antd";
import { getFamilies, getProcesses } from "./actions";
import ClientWrapper from "./client-wrapper";

export default async function HierarchyPage() {
  // Fetch initial data from server
  const [families, processes] = await Promise.all([getFamilies(), getProcesses()]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Hierarchy Management</h1>

      <Suspense fallback={<Skeleton active />}>
        <ClientWrapper families={families} processes={processes} />
      </Suspense>
    </div>
  );
}

// import { Suspense } from "react";
// import { Skeleton } from "antd";
// import ClientWrapper from "./client-wrapper";
// import { getFamilies, getProcesses } from "./actions";

// export const dynamic = "force-dynamic"; // Ensure the page isn't cached

// export default async function HierarchyPage() {
//   // Fetch initial data from server actions (server-side only)
//   const [families, processes] = await Promise.all([getFamilies(), getProcesses()]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Heirarchy Management</h1>

//       <Suspense fallback={<Skeleton active />}>
//         <ClientWrapper families={families} processes={processes} />
//       </Suspense>
//     </div>
//   );
// }
