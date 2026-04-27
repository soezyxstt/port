import Image from "next/image";
import { Link } from "next-view-transitions";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--background)]/80">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="relative h-10 w-10">
          <Image
            src="/logo-transparent.png"
            alt="AHN Logo"
            fill
            className="object-contain"
          />
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          {["Home", "Work", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
              className="relative group transition-colors hover:text-[var(--accent)]"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
