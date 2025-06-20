import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-5xl font-bold mb-8">Welcome to My Portfolio</h1>
      
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg relative">
      <Image
        src="/images/profile.jpg"
        alt="My Profile Picture"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: '60% 25%',
          transform: 'scale(1)', // bigger zoom
        }}
        priority
      />
    </div>
    </section>
  );
}
