import React from 'react';
import { Box, Typography, Button, Card, styled } from '@mui/material';

const EmptyPlaylistCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	padding: '20px',
	borderRadius: '8px',
	textAlign: 'center',
}));

const CreatePlaylistButton = styled(Button)({
	'marginTop': '20px',
	'fontWeight': 700,
	'backgroundColor': '#1db954',
	'color': '#fff',
	'&:hover': {
		backgroundColor: '#1ed760',
	},
});

const EmptyPlaylist = () => (
	<EmptyPlaylistCard>
		<Typography variant='h6' fontWeight={700}>
			Create your first playlist
		</Typography>
		<Typography variant='body2' sx={{ mt: 1, mb: 2 }}>
			It's easy, we'll help you
		</Typography>
		<CreatePlaylistButton variant='contained'>Create playlist</CreatePlaylistButton>
	</EmptyPlaylistCard>
);

export default EmptyPlaylist;
