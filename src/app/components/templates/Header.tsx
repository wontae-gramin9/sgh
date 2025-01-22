import DarkModeToggle from "@/app/components/DarkModeToggle";

export default function Header() {
  return (
    <div className="mb-8 w-full bg-primary-li p-2">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Game Server Card List</h1>
          <DarkModeToggle />
        </div>
        <p className="text-foreground-nm">By Wontae Choi</p>
      </div>
    </div>
  );
}
