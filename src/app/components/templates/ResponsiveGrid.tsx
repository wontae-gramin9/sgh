export default function ResponsiveGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <pre className="grid w-full grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-x-4 gap-y-8 rounded-lg bg-background-nm p-4 sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
      {children}
    </pre>
  );
}
