import React, {Fragment, useState} from 'react';
import TextField from '../TextField';
import Button from '../Button';
import getUserDataApi from './getUserDataApi';
import {usersPath} from '../../api/paths';

const Form = () => {
	const {data, loading, getUrl, error} = getUserDataApi(usersPath(1), {});
	const [id, setId] = useState(1);

	return (
		<form
			onSubmit={event=> {
				getUrl(usersPath(id));
				event.preventDefault();
			}}
		>
			<TextField
				type="number"
				variant="outlined"
				placeholder="Add search text.."
				value={id}
				setId={setId}
			/>
			<Button
				type="submit"
			/>
			{loading ? <div>Загрузка..</div> : <div>{data.name}</div>}
			{error && (
				<Fragment>
					<div><b>{error.message}</b></div>
					<div><b>{error.status}</b></div>
				</Fragment>
			)}
		</form>
	);
}

export default Form;