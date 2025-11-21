import bgImg from '../assets/landing_logo.png'
import ritmoLogo from '../assets/ritmo-logo.png'
import cpRitmo from '../assets/cp-ritmo.png'
import Reveal from '../components/Reveal'

export default function ContactUs() {
	return (
		<main className="w-full overflow-x-hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'repeat', backgroundSize: '240px auto' }}>
			{/* Contact Form Section */}
			<section className="w-screen -mx-[calc(50vw-50%)] bg-[#F4FAF9] py-20">
				<div className="mx-auto max-w-4xl px-6">

					{/* Title */}
					<div className="mb-10 text-left">
						<Reveal from="up" delay={0}>
							<h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2">Tell us what you need!</h2>
						</Reveal>
						<Reveal from="up" delay={120}>
							<p className="text-black text-base">Our team is always happy to chat.</p>
						</Reveal>
					</div>

					<form className="space-y-8">

						{/* First / Last Name */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Reveal from="up" delay={0}>
								<div>
									<label className="block text-sm font-medium mb-2 text-black text-black text-left">First Name</label>
									<input
										type="text"
										className="text-black w-full px-4 py-3 border-2 border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
									/>
								</div>
							</Reveal>

							<Reveal from="up" delay={80}>
								<div>
									<label className="block text-sm font-medium mb-2 text-black text-left">Last Name</label>
									<input
										type="text"
										className="text-black w-full px-4 py-3 border-2 border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
									/>
								</div>
							</Reveal>
						</div>

						{/* Email */}

						<Reveal from="up" delay={160}>
							<div>
								<label className="block text-sm font-medium mb-2 text-black text-left">Email Address</label>
								<input
									type="email"
									className="text-black w-full px-4 py-3 border-2 border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
								/>
							</div>
						</Reveal>

						{/* Message */}

						<Reveal from="up" delay={240}>
							<div>
								<label className="block text-sm font-medium mb-2 text-black text-left">Your Message</label>
								<textarea
									rows={8}
									className="text-black w-full px-4 py-3 border-2 border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
								></textarea>
							</div>
						</Reveal>

						{/* Consent Checkbox */}
						<div className="flex items-start">
							<input
								type="checkbox"
								className="mt-1 h-5 w-5 border-2 border-teal-300 rounded focus:ring-teal-500"
							/>
							<label className="ml-3 text-sm text-black leading-5">
								I hereby consent that Ritmo may send me promotional messages by e-mail regarding its campaigns
								and product update news.
							</label>
						</div>

						{/* Submit Button */}
						<div className="flex justify-center">
							<button
								type="submit"
								className="px-12 py-3 bg-[#2D7778] text-white font-semibold rounded-lg shadow-md transition 
					hover:bg-[#256565] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
							>
								Submit
							</button>
						</div>

					</form>
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
							<div className="bg-white rounded-2xl border-2 border-teal-300 shadow-brand p-8 flex items-center justify-center min-h-[350px] transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer order-2 lg:order-1">
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
