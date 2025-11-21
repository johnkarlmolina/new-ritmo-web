import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import bgImg from '../assets/landing_logo.png'
import handPhone from '../assets/hand-phone.png'
import ritmoLogo from '../assets/ritmo-logo.png'

export default function DownloadApp() {
  return (
    <main className="w-full overflow-x-hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'repeat', backgroundSize: '240px auto' }}>
      <section className="w-screen -mx-[calc(50vw-50%)] py-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal from="left" delay={0}>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-2xl border-2 border-teal-300 shadow-brand p-6 max-w-md w-full">
                <img src={handPhone} alt="Ritmo phone" className="w-full h-auto object-contain" />
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={120}>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Download the Ritmo App</h1>
              <p className="text-slate-700 mb-6 max-w-prose">
                Get the Ritmo mobile app to create visual routines and help your child build consistent habits. Available for Android.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href="#" className="inline-flex items-center justify-center rounded-[10px] bg-[#2D7778] px-6 py-3 font-semibold text-white shadow-brand hover:bg-[#256565]">Download App</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="w-screen -mx-[calc(50vw-50%)] bg-[#2c7a7b] text-white pt-14">
        <div className="mx-auto max-w-7xl px-6 pb-12 grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center md:justify-items-stretch">
          {/* Left block: logo + text + follow */}
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center justify-center bg-white rounded-xl px-4 py-3 shadow mb-6">
              <img src={ritmoLogo} alt="Ritmo" className="h-14 w-auto" />
            </div>
            <p className="text-base leading-relaxed text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-10">
              <h4 className="font-bold text-xl mb-4 text-center md:text-left">Follow Us</h4>
              <a href="#" aria-label="Facebook" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white font-bold text-xl shadow transition hover:bg-white hover:text-[#1877F2] hover:scale-110 mx-auto md:mx-0">
                f
              </a>
            </div>
          </div>

          {/* Right block: download + back to top (centered) */}
          <div className="flex flex-col max-w-sm items-center text-center">
            <h4 className="font-bold text-2xl mb-6 text-center">Download App</h4>
            <button className="rounded-full bg-white text-[#2c7a7b] font-semibold px-10 py-3 text-base shadow transition hover:bg-teal-50 hover:shadow-lg mb-8">Click Here!!!</button>
            <div className="flex flex-col items-center">
              <p className="text-base font-semibold mb-4">Back to top</p>
              <button
                type="button"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/60 hover:bg-white/10 transition"
              >
                <span className="text-xl">˄</span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#A6E3C8] text-[#184a46] text-center text-xs font-medium py-3 tracking-wide">
          Copyright 2025 - Ritmo | Website Built by Group Name
        </div>
      </footer>
    </main>
  )
}
