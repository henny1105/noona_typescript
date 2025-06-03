import React from 'react';
import { Box, Typography, IconButton, styled } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddIcon from '@mui/icons-material/Add';

const LibraryHeadContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '8px 12px',
	background: theme.palette.background.paper,
	borderRadius: '8px',
}));

const LibraryHead = () => (
	<LibraryHeadContainer>
		<Box display='flex' alignItems='center' gap={1}>
			<BookmarkBorderIcon />
			<Typography fontWeight={700}>Your Library</Typography>
		</Box>
		<IconButton size='small'>
			<AddIcon sx={{ color: 'green' }} />
		</IconButton>
	</LibraryHeadContainer>
);

export default LibraryHead;
