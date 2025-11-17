import { useState } from 'react'
import logo from '../assets/ritmo-logo.png'

function Navbar() {
	const [open, setOpen] = useState(false)

	const toggle = () => setOpen((v) => !v)
	const close = () => setOpen(false)

	return (
		<header className="navbar">
			<div className="nav-container">
				<a href="/" className="brand" onClick={close} aria-label="Ritmo Home">
					<img src={logo} alt="Ritmo" className="brand-logo" />
				</a>

				<button
					className="mobile-toggle"
					aria-label="Toggle navigation"
					aria-expanded={open}
					onClick={toggle}
				>
					<span className="bar" />
					<span className="bar" />
					<span className="bar" />
				</button>

				<nav className={"nav-links" + (open ? " nav-links--open" : "")}>
					<a href="#about" onClick={close}>About Us</a>
					<a href="#contact" onClick={close}>Contact Us</a>
					<a href="#news" onClick={close}>News</a>
				</nav>
			</div>
		</header>
	)
}

export default Navbar

