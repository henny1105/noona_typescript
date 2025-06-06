import { styled } from '@mui/material';
import React from 'react';

const PlayButtonContainer = styled('button')(() => ({
	'backgroundColor': '#1DB954',
	'border': 'none',
	'borderRadius': '50%',
	'width': '30px',
	'height': '30px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'cursor': 'pointer',
	'boxShadow': '0 4px 12px rgba(0,0,0,0.15)',
	'transition': 'background 0.2s, box-shadow 0.2s',
	'&:hover': {
		backgroundColor: '#1ed760',
		boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
	},
	'&:focus': {
		outline: 'none',
	},
}));

const PlayButton: React.FC = () => (
	<PlayButtonContainer>
		<svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
			<polygon points='8,6 22,14 8,22' fill='white' />
		</svg>
	</PlayButtonContainer>
);

export default PlayButton;
