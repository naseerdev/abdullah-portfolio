const bgUrl =
  'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoXE9nPb7DnUgAqLfXWbLdLxm7EXWRWyJmyWzCyOJz8br9bvM7cnxOLsYHHeklXXMl3vQcjWCcrkoD6Dm_vIzZgeB7nwW95a_tpGwoe8f-qwR6hCPoVxOQVaILouVSKJhpbdTh6qr4s8Od6HP4HNlPV-4_IysxhCnD88QzDgyVeIO7KNaQyywXuyp2zsJnO1B2HuKTcLkUVkCIKXaWwCLmBz1GRC5uQH8bhLgwLfYwhEMbe8LtW0KVxq-ySiQZT2q-q_JejPoHxvjF")';

export default function Hero() {
  return (
    <section className="@container px-2 sm:px-8 lg:px-0 py-8 flex flex-col items-center" id="hero">
      <div
        className="flex min-h-[320px] sm:min-h-[480px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @sm:gap-8 @sm:rounded-xl items-start justify-end px-4 pb-10 @sm:px-10 lg:px-16 w-full max-w-6xl mx-auto"
        style={{ backgroundImage: bgUrl, fontFamily: 'Manrope, Noto Sans, sans-serif' }}
      >
        <div className="flex flex-col gap-2 text-left">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">Hi, I'm Abdullah Nasir</h1>
          <h2 className="text-white text-sm sm:text-base lg:text-lg font-normal leading-normal max-w-2xl">
            UI/UX Designer — Crafting seamless digital experiences with user-centric design.
          </h2>
        </div>
        <div className="flex-wrap gap-3 flex mt-4">
          <a
            href="https://behance.net/abdullahnasir8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 sm:h-12 px-4 sm:px-5 bg-[#dce8f3] text-[#101518] text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-100 transition"
          >
            <span className="truncate">View My Work →</span>
          </a>
          <a
            href="#contact"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 sm:h-12 px-4 sm:px-5 bg-[#eaedf1] text-[#101518] text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-50 transition"
          >
            <span className="truncate">Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
} 