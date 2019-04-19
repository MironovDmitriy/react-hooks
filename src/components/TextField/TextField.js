import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
	root: {
		display: 'flex',
		justifyContent: 'row',
		margin: '10px 0',
		width: '200px',
	},
});

const CustomTextField = (props) => {
	const {classes, setId, variant, placeholder, type, value} = props;

	return (
		<TextField
			className={classes.root}
			type={type}
			variant={variant}
			placeholder={placeholder}
			value={value}
			onChange={event=> {
				setId(event.target.value);
			}}
		/>
	);
};

CustomTextField.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTextField);