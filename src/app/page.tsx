import { redirect } from "next/navigation";
import { Button } from "antd";

export default function Home() {
  const isLogin = true;
  if (isLogin) {
    return redirect("/main/hierarchy");
  }

  return (
    <div className="App">
      <Button type="primary" className="m-6">
        Login
      </Button>
    </div>
  );
}
