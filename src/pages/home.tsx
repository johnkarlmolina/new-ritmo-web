import bgImg from '../assets/landing_logo.png'
import brushingGif from '../asset-gif/brushing.gif'
import washingGif from '../asset-gif/washing.gif'
import eatingGif from '../asset-gif/eating.gif'

export default function Home() {
  return (
    <section
      className="relative w-screen -mx-[calc(50vw-50%)] py-8 md:py-12"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '240px auto',
      }}
    >
      <div className="absolute inset-0 bg-white/65 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:[grid-template-columns:minmax(360px,520px)_1fr] gap-8 lg:gap-12 items-start">
        <div className="max-w-md text-left flex flex-col h-full">
          <h2 className="text-[2.25rem] md:text-[2.6rem] leading-tight font-extrabold text-slate-800 mb-3">
            Our Goal
          </h2>
          <p className="text-[1.05rem] leading-8 text-slate-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="mt-auto pt-6">
            <button
              className="inline-flex items-center justify-center rounded-xl2 border border-white/60 bg-[#2D7778] px-6 py-3 font-semibold text-white shadow-brand mx-auto"
            >
              Download Mobile App
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start justify-items-stretch">
          {/* Big left card */}
          <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand overflow-hidden w-full max-w-sm md:max-w-none mx-auto md:h-52">
            <img src={brushingGif} alt="Brushing teeth" className="w-full h-full object-cover" />
          </div>

          {/* Middle card, halfway down from top card */}
          <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand overflow-hidden w-full max-w-sm md:max-w-none mx-auto md:h-52 md:mt-20">
            <img src={washingGif} alt="Washing" className="w-full h-full object-cover" />
          </div>

          {/* Right card small and landscape */}
          <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand overflow-hidden w-full max-w-sm md:max-w-none mx-auto md:h-52 md:mt-6">
            <img src={eatingGif} alt="Eating" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
