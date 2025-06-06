import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
	'backgroundColor': '#181818',
	'borderRadius': '8px',
	'transition': 'background-color 0.3s ease',
	'cursor': 'pointer',
	'&:hover': {
		backgroundColor: '#282828',
	},
}));

const FeaturedPlaylist = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
					<Box
						sx={{
							width: '80px',
							height: '80px',
							backgroundColor: '#333',
							borderRadius: '4px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Typography variant='h3' color='primary'>
							♫
						</Typography>
					</Box>
					<Box>
						<Typography variant='h3' sx={{ marginBottom: '8px' }}>
							Featured Playlist
						</Typography>
						<Typography variant='subtitle1' color='text.secondary'>
							Your personalized playlist
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default FeaturedPlaylist;
