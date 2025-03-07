"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

export default function MainContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const items = [
    {
      key: 0,
      label: "Home",
      link: "/main/home",
    },
    {
      key: 1,
      label: "Hierarchy",
      link: "/main/hierarchy",
    },
  ];

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(e) => router.push(items[e.key].link)}
        />
      </Header>
      <Content
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
