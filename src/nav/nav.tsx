import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/ritmo-logo.png'

function Navbar() {
	const [open, setOpen] = useState(false)

	const toggle = () => setOpen((v) => !v)
	const close = () => setOpen(false)

	return (
		<header className="navbar">
			<div className="nav-container">
				<Link to="/" className="brand" onClick={close} aria-label="Ritmo Home">
					<span className="brand-badge">
						<img src={logo} alt="Ritmo" className="brand-logo" />
					</span>
				</Link>

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
					<NavLink to="/about" onClick={close} className={({isActive}) => isActive ? 'pill active' : 'pill'}>About Us</NavLink>
					<NavLink to="/contact" onClick={close} className={({isActive}) => isActive ? 'pill active' : 'pill'}>Contact Us</NavLink>
					<NavLink to="/news" onClick={close} className={({isActive}) => isActive ? 'pill active' : 'pill'}>News</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Navbar

