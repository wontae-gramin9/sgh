export default function ResponsiveGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <pre className="grid w-full grid-cols-3 gap-x-4 gap-y-8 rounded-lg bg-background-nm p-4">
      {children}
    </pre>
  );
}
