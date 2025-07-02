import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="top-0 left-0 w-full px-6 py-4 bg-gray-800/20 backdrop-blur-md border-b border-white/10 z-50 mb-5">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={80}
        height={38}
        priority
      />
    </nav>
  );
}
