import Button from './Button.js';
import PropTypes from 'prop-types'

Button.defaultProps = {
	type: "button",
	isDisabled: false,
	onClick: btnClick
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired
}

/**
 * Default function for button
 * @returns default value
 */
function btnClick() {
	//debugger
	/*let response = convertAndroidToIOS(data)
	console.log(response);*/
	return;
}

export default Button;