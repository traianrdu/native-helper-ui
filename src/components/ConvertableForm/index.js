import ConvertableForm from './ConvertableForm.js';
import PropTypes from 'prop-types'

ConvertableForm.defaultProps = {
	id: "",
	name: "",
	rows: "",
	cols: "",
	innerRef: null
}
  
ConvertableForm.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	rows: PropTypes.string,
	cols: PropTypes.string,
	innerRef: PropTypes.func
}

export default ConvertableForm;