import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="container flex items-center flex-col p-2 mx-auto">
      <h1 className="mb-3 text-[3rem]">Some Components</h1>
      <div className="w-full h-50 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border border-gray-500/40 rounded-xl shadow-xl backdrop-blur-sm p-10">
        <Navbar />
      </div>
    </div>
  );
}
