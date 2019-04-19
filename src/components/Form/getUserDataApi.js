import {useState, useEffect} from 'react';
import apiRequest from '../../api/api-request';

const getUserDataApi = (initialUrl, initialData) => {
	const [data, setData] = useState(initialData);
	const [url, setUrl] = useState(initialUrl);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(()=> {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			try {
				const result = await apiRequest(url);
				console.log(result);
				setData(result);
			} catch (err) {
				setError(err)
			}
			setLoading(false);
		};
		fetchData();
	}, [url]);

	const getUrl = query => {
		setUrl(query)
	};

	return {
		data,
		loading,
		error,
		getUrl,
	};
};

export default getUserDataApi;