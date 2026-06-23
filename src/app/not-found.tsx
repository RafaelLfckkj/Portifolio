import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-[#2dd4bf] mb-4">404</h1>
      <p className="text-xl mb-8">
        Ops! Essa página não foi encontrada.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-[#2dd4bf] text-black font-semibold hover:bg-[#25b8a5] transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}