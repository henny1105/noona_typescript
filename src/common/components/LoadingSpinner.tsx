import { CircularProgress, Box } from '@mui/material';
import React from 'react';

const LoadingSpinner = () => {
	return (
		<Box display='flex' justifyContent='center' alignItems='center' minHeight='200px'>
			<CircularProgress />
		</Box>
	);
};

export default LoadingSpinner;
