import bgImg from '../assets/landing_logo.png'
import ritmoLogo from '../assets/ritmo-logo.png'
import ritmoLogoNoBg from '../assets/ritmo-logo-no-bg.png'
import bigPicture from '../assets/about_us_big_picture.png'
import cpRitmo from '../assets/cp-ritmo.png'
import flitchir from '../assets/flitchir_ng_novaliches.png'
import AbucayImg from '../asset-team-img/Abucay.jpg'
import ArcasImg from '../asset-team-img/Arcas.png'
import AwalImg from '../asset-team-img/Awal.png'
import BertesImg from '../asset-team-img/BERTES.png'
import DeatoImg from '../asset-team-img/Deato.png'
import DuhilingImg from '../asset-team-img/DUHILING.png'
import IsorenaImg from '../asset-team-img/Isorena.png'
import ManzanoImg from '../asset-team-img/Manzano.jpg'
import MendozaImg from '../asset-team-img/Mendoza.jpeg'
import MolinaImg from '../asset-team-img/Molina.jpg'
import PeterImg from '../asset-team-img/Peter.jpg'
import SambilayImg from '../asset-team-img/Sambilay.jpg'
import Reveal from '../components/Reveal'
     
export default function AboutUs() {
	return (
		<main
			className="w-full overflow-x-hidden"
			style={{
				backgroundImage: `url(${bgImg})`,
				backgroundRepeat: 'repeat',
				backgroundSize: '240px auto',
			}}
		>
			{/* Hero Section with Image */}
			<section
				className="relative w-screen -mx-[calc(50vw-50%)] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-to-b from-gray-200 to-gray-300"
			>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-full h-full bg-gray-400 flex items-center justify-center text-slate-600">
						<img
							src={bigPicture}
							alt="About Us Picture"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>


			{/* Our Mission Section */}
			<section className="relative w-screen -mx-[calc(50vw-50%)] py-15">
				<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

					{/* Left: Text */}
					<div className="text-left">
						<Reveal from="up" delay={0}>
							<h2 className="text-3xl md:text-4xl font-extrabold text-black mb-5">Our Mission</h2>
						</Reveal>
						<Reveal from="up" delay={120}>1
							<p className="text-black leading-7">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex
								ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</Reveal>
					</div>

					{/* Right: White Card */}
					<Reveal from="right" delay={180}>
						<div className="relative bg-white rounded-2xl border-4 border-teal-300 shadow-brand p-8 h-100">
							<img src={ritmoLogo} className="absolute left-6 bottom-6 h-16" />
						</div>
					</Reveal>

				</div>
			</section>


			{/* Second Section */}
			<section className="relative w-screen -mx-[calc(50vw-50%)] py-15">
				<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

					{/* Left: White Card */}
					<Reveal from="left" delay={80}>
						<div className="relative bg-white rounded-2xl border-4 border-teal-300 shadow-brand p-8 h-100">
							<img src={ritmoLogo} className="absolute left-6 bottom-6 h-16" />
						</div>
					</Reveal>

					{/* Right: Logo + Text */}
					<Reveal from="right" delay={160}>
						<div className="relative order-1 md:order-2 text-left">
							<img src={ritmoLogoNoBg} className="h-20 mb-4" />
							<p className="text-black leading-7">
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex
							ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
					</div>
				</Reveal>

				</div>
			</section>


			{/* Join Us Section */}
			<section
				className="w-screen -mx-[calc(50vw-50%)] bg-white py-14 md:py-20"
			>
				<div className="mx-auto max-w-7xl px-6">
					<div className="text-center mb-10">
						<Reveal from="up" delay={0}>
							<h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Join us in our mission</h3>
						</Reveal>
						<Reveal from="up" delay={120}>
							<p className="text-black leading-7 max-w-2xl mx-auto">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</Reveal>
					</div>

					{/* Three Placeholder Boxes */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 px-6">
						<Reveal from="up" delay={80}>
							<div className="bg-gray-100 rounded-2xl border-4 border-teal-300 shadow-brand p-8 aspect-square flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
								<span className="text-slate-500 text-sm">Image Placeholder</span>
							</div>
						</Reveal>
						<Reveal from="up" delay={160}>
							<div className="bg-gray-100 rounded-2xl border-4 border-teal-300 shadow-brand p-8 aspect-square flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
								<span className="text-slate-500 text-sm">Image Placeholder</span>
							</div>
						</Reveal>
						<Reveal from="up" delay={240}>
							<div className="bg-gray-100 rounded-2xl border-4 border-teal-300 shadow-brand p-8 aspect-square flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
								<span className="text-slate-500 text-sm">Image Placeholder</span>
							</div>
						</Reveal>
					</div>
				</div>
			</section>
			{/* Ritmo App Section */}
			<section
				className="w-screen -mx-[calc(50vw-50%)] py-14 md:py-20"
			>
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
						{/* Left Column - Phone Image Placeholder */}
						<Reveal from="left" delay={0}>
							<div className="bg-white rounded-2xl shadow-brand p-8 flex items-center justify-center min-h-[350px] transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer order-2 lg:order-1">
								<div className="text-center">
									<img src={cpRitmo} alt="Cp Ritmo" />
								</div>
							</div>
						</Reveal>

						{/* Right Column - Text Content */}
						<Reveal from="right" delay={120}>
							<div className="order-1 lg:order-2 text-left">
								<h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4">The Ritmo App is now available for download on Android.</h3>

								<p className="text-sm font-semibold text-black mb-2">What does Ritmo do?</p>

								<ul className="space-y-3 text-black list-disc pl-5 mb-6">
									<li>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</li>
									<li>
										Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</li>
								</ul>
								<button className="rounded-full bg-[#2D7778] px-6 py-3 font-semibold text-white shadow-brand transition hover:bg-[#256565]">Download App</button>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* Meet the Team Section */}
			<section
				className="w-screen -mx-[calc(50vw-50%)] bg-white py-14 md:py-20"
			>
				<div className="mx-auto max-w-7xl px-6">
					<Reveal from="up" delay={0}>
						<h3 className="text-3xl md:text-4xl font-extrabold text-black text-left mb-10">Meet the Team</h3>
					</Reveal>

					{/* Team Grid */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{/* Team Member Card */}
						{[ 	
							{ name: "Ashley D. Abucay ", role: "System Analyst" },
							{ name: "John Pritch L. Arcas", role: "Back-end Developer" },
							{ name: "Alrashim M. Awal", role: "Front-end Developer" },
							{ name: "Nikki Anne R. Bertes", role: "System Analyst" },
							{ name: "Ma. Daniella A. Brocano", role: "System Analyst" },
							{ name: "John Carlo A. Deato", role: "Back-end Developer" },
							{ name: "Myra Leah S. Duhiling", role: "Project Manager" },
							{ name: "Fletcher Peter M. Hernandez", role: "Lead UI/UX Designer" },
							{ name: "Jerald B. Isorena", role: "Lead Programmer" },
							{ name: "Kurt Lee B. Manzano", role: "UI/UX Designer" },
							{ name: "Mary Joy N. Mendoza", role: "System Analyst" },
							{ name: "John Karl P. Molina", role: "Front-end Developer" },
							{ name: "Joemar A. Sambilay", role: "System Analyst" },
						].map((member, index) => (
							<div key={index} className="flex flex-col items-left">
								<Reveal from="up" delay={index * 60}>
									{(() => {
										const teamImageMap: Record<string, string> = {
											abucay: AbucayImg,
											arcas: ArcasImg,
											awal: AwalImg,
											bertes: BertesImg,
											deato: DeatoImg,
											duhiling: DuhilingImg,
											isorena: IsorenaImg,
											manzano: ManzanoImg,
											mendoza: MendozaImg,
											molina: MolinaImg,
											peter: PeterImg,
											sambilay: SambilayImg,
										}

										function getImageForName(fullName: string) {
											const tokens = fullName
												.trim()
												.split(/\s+/)
												.map(t => t.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())
											for (const token of tokens) {
												if (teamImageMap[token]) return teamImageMap[token]
											}
											return flitchir
										}

										const imgSrc = getImageForName(member.name)
										return (
											<div className="w-full aspect-square bg-gray-100 rounded-2xl border-2 border-teal-300 shadow-brand mb-3 flex items-center justify-center overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
												<img src={imgSrc} alt={member.name} className="w-full h-full object-cover" />
											</div>
										)
									})()}
								</Reveal>
								<h4 className="text-sm font-semibold text-black text-left mb-1">{member.name}</h4>
								<p className="text-xs text-black text-left">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer className="w-screen -mx-[calc(50vw-50%)] bg-[#2c7a7b] text-white pt-14">
				{/* Constrain width and use grid for balanced center spacing */}
				<div className="mx-auto max-w-6xl px-10 pb-12 grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center md:justify-items-stretch">
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
