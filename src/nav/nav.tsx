import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/ritmo-logo.png'

function Navbar() {
	const [open, setOpen] = useState(false)

	const toggle = () => setOpen((v) => !v)
	const close = () => setOpen(false)

	const pillBase =
		'inline-flex items-center justify-center rounded-full border border-white/40 bg-[#A6E3C8] text-[#184a46] visited:text-[#184a46] font-semibold shadow-sm px-4 py-2 hover:bg-[#9cdbc1] transition-colors'

	const pillClass = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${pillBase} bg-[#94d9bc]` : pillBase

	return (
		<header className="sticky top-0 z-50 w-screen -mx-[calc(50vw-50%)] bg-[#2c7a7b] text-white shadow-md">
			<div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
				<Link to="/" onClick={close} aria-label="Ritmo Home" className="inline-flex items-center gap-2">
					<span className="inline-flex items-center justify-center bg-white rounded-xl px-3 py-2 shadow">
						<img src={logo} alt="Ritmo" className="h-9 w-auto block" />
					</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-2">
					<NavLink to="/about" onClick={close} className={pillClass}>
						About Us
					</NavLink>
					<NavLink to="/contact" onClick={close} className={pillClass}>
						Contact Us
					</NavLink>
					<NavLink to="/news" onClick={close} className={pillClass}>
						News
					</NavLink>
				</nav>

				{/* Burger */}
				<button
					type="button"
					aria-label="Toggle navigation"
					aria-expanded={open}
					onClick={toggle}
					className="md:hidden inline-flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-lg border border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
				>
					<span className="sr-only">Open menu</span>
					<span
						className={
							'block w-6 h-0.5 bg-white rounded transition-transform duration-200 ' +
							(open ? 'rotate-45 translate-y-[6px]' : '')
						}
					/>
					<span
						className={
							'block w-6 h-0.5 bg-white rounded transition-opacity duration-200 ' +
							(open ? 'opacity-0' : 'opacity-100')
						}
					/>
					<span
						className={
							'block w-6 h-0.5 bg-white rounded transition-transform duration-200 ' +
							(open ? '-rotate-45 -translate-y-[6px]' : '')
						}
					/>
				</button>
			</div>

			{/* Mobile panel */}
			<div
				className={
					'md:hidden border-t border-white/15 bg-[#2c7a7b] shadow-sm overflow-hidden transition-all duration-300 ' +
					(open ? 'max-h-[320px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2')
				}
			>
				<div className="px-4 py-3 space-y-2 transition-all duration-300">
					<NavLink to="/about" onClick={close} className={({ isActive }) =>
						(isActive ? 'bg-[#94d9bc]' : 'bg-[#A6E3C8]') +
						' block w-full text-center rounded-full border border-white/40 text-[#184a46] visited:text-[#184a46] font-semibold px-4 py-3 shadow-sm hover:bg-[#9cdbc1]'
					}>
						About Us
					</NavLink>
					<NavLink to="/contact" onClick={close} className={({ isActive }) =>
						(isActive ? 'bg-[#94d9bc]' : 'bg-[#A6E3C8]') +
						' block w-full text-center rounded-full border border-white/40 text-[#184a46] visited:text-[#184a46] font-semibold px-4 py-3 shadow-sm hover:bg-[#9cdbc1]'
					}>
						Contact Us
					</NavLink>
					<NavLink to="/news" onClick={close} className={({ isActive }) =>
						(isActive ? 'bg-[#94d9bc]' : 'bg-[#A6E3C8]') +
						' block w-full text-center rounded-full border border-white/40 text-[#184a46] visited:text-[#184a46] font-semibold px-4 py-3 shadow-sm hover:bg-[#9cdbc1]'
					}>
						News
					</NavLink>
				</div>
			</div>
		</header>
	)
}

export default Navbar

