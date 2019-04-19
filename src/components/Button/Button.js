import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
	root: {
		display: 'flex',
		justifyContent: 'row',
		margin: '10px 0',
	},
});

const CustomButton = (props) => {
	const {classes, type} = props;

	return (
		<Button
			variant="contained"
			className={classes.root}
			type={type}
		>
			Search
		</Button>
	);
};

CustomButton.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomButton);