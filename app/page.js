import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <div>
        <h1 className=" text-4xl font-bold my-8">Welcome to church directory! </h1>
        <p className="p-5">Please log in here to explore more information.</p>
        <button className="bg-[#020617] text-white p-3"><Link href="/login">Log in</Link></button>
      </div>
    </main>
  );
}
