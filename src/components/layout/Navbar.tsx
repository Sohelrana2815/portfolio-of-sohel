import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-4 right-4 z-50 ">
      <ModeToggle />
    </nav>
  );
}
