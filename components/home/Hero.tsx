export function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center min-h-[80vh] px-6 max-w-7xl mx-auto w-full pt-20">
      <div className="max-w-4xl transition-all duration-1000 ease-out delay-100 starting:opacity-0 starting:translate-y-8">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
          Adi Haditya <br />
          Nursyam.
        </h1>
      </div>
      
      <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 transition-all duration-1000 ease-out delay-300 starting:opacity-0 starting:translate-y-8">
        <div className="max-w-md">
          <p className="text-lg md:text-xl text-[var(--foreground)]/80 font-medium">
            Mechanical Engineering @ ITB | Full-stack Developer.
          </p>
        </div>
        <div className="text-sm font-medium tracking-widest uppercase">
          Based in Indonesia
        </div>
      </div>
    </section>
  );
}
