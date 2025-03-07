import MainContainer from "@/components/main-container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainContainer>{children}</MainContainer>;
}
