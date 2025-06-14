import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryHead from './components/LibraryHead';
import EmptyPlaylist from './components/EmptyPlaylist';
import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Layout = styled('div')({
	display: 'flex',
	height: '100vh',
	padding: '8px',
	gap: '20px',
});

const Sidebar = styled('div')(({ theme }) => ({
	width: '240px',
	minWidth: '240px',
	maxWidth: '240px',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
}));

const ContentBox = styled(Box)(({ theme }) => ({
	borderRadius: '8px',
	backgroundColor: theme.palette.background.paper,
	color: theme.palette.text.primary,
	width: '100%',
	padding: '8px',
	marginBottom: '8px',
	marginRight: '8px',
}));

const NavList = styled('ul')({
	listStyle: 'none',
	padding: 0,
	margin: 0,
});

const StyledNavLink = styled(NavLink)(({ theme }) => ({
	'textDecoration': 'none',
	'display': 'flex',
	'alignItems': 'center',
	'gap': '20px',
	'color': theme.palette.text.secondary,
	'&.active': {
		color: theme.palette.text.primary,
	},
	'&:hover': {
		color: theme.palette.text.primary,
	},
}));

const StyledLibraryHead = styled(LibraryHead)(({ theme }) => ({
	color: theme.palette.text.secondary,
}));

const AppLayout = () => {
	return (
		<Layout>
			<Sidebar>
				<ContentBox>
					<NavList>
						<StyledNavLink to='/'>
							<HomeIcon />
							<Typography variant='h2' fontWeight={700}>
								Home
							</Typography>
						</StyledNavLink>

						<StyledNavLink to='/search'>
							<SearchIcon />
							<Typography variant='h2' fontWeight={700}>
								Search
							</Typography>
						</StyledNavLink>
					</NavList>
				</ContentBox>
				<ContentBox>
					<StyledLibraryHead />
				</ContentBox>
				<EmptyPlaylist />
			</Sidebar>
			<Outlet />
		</Layout>
	);
};

export default AppLayout;
