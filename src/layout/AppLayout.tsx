import React from 'react';
import { Outlet, Link } from 'react-router';

const AppLayout = () => {
	return (
		<div>
			<nav className='sidebar'>
				<div className='logo'>
					<h1>Spotify Demo</h1>
				</div>
				<ul className='nav_links'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/search'>Search</Link>
					</li>
					<li>
						<Link to='/playlist'>Playlists</Link>
					</li>
				</ul>
			</nav>
			<main className='main_content'>
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
