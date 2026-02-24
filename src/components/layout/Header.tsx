import { ModeToggle } from "../ModeToggle";

export default function Header() {
  return (
    <nav className="fixed top-4 right-20 z-50">
      <ModeToggle />
    </nav>
  );
}
