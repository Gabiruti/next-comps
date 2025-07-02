import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex justify-center p-2 mx-auto">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
