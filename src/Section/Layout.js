import { Link, Outlet } from "react-router-dom"

const Layout = () => {
	return <>
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/search">Rechercher</Link>
				</li>
				<li>
					<Link to="/car">Voiture</Link>
				</li>
			</ul>
		</nav>
		<Outlet />
	</>
}

export default Layout