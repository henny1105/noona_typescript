import axios from 'axios';
import { URLSearchParams } from 'url';
import { clientId, clientSecret } from '../configs/authConfig';

const encodedBase64 = (data: string): string => {
	return Buffer.from(data).toString('base64');
};

export const getClientCredentialToken = async () => {
	try {
		const body = new URLSearchParams({
			grant_type: 'client_credentials',
		});

		const response = await axios.post('https://accounts.spotify.com/api/token', body, {
			headers: {
				'Authorization': `Basic ${encodedBase64(clientId + ':' + clientSecret)}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		return response.data;
	} catch (error) {
		throw new Error('Failed to get client credential token');
	}
};
