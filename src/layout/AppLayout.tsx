import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AppLayout = () => {
	return (
		<div className='app-layout'>
			<nav className='sidebar'>
				<div className='logo'>
					<h1>Spotify Demo</h1>
				</div>
				<ul className='nav-links'>
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
			<main className='main-content'>
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
