import { CircularProgress, Box } from '@mui/material';
import React from 'react';

const LoadingSpinner = () => (
	<Box
		sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: '300px',
			width: '100%',
		}}
	>
		<CircularProgress />
	</Box>
);

export default LoadingSpinner;
