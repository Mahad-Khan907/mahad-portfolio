import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 dark:bg-[#080a11] bg-[#eef2f6] text-slate-800 dark:text-slate-100 font-sans">
      <h1 className="text-6xl font-extrabold font-mono dark:text-cyan-400 text-blue-600 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-sm text-slate-500 mb-6 font-mono">
        The requested URL was not found on this server.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-xl dark:bg-cyan-500 dark:text-black bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
