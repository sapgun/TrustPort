// app/app/layout.tsx
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* TODO: Add App specific Navbar and Footer */}
      <main>{children}</main>
    </div>
  );
}