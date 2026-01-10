
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div id="dashboard-layout">{children}</div>;
}
