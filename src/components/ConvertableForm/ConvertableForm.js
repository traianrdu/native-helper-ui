import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import './ConvertableForm.css';

export default function ConvertableForm({ children, id, name, rows, cols, innerRef }) {
  //const [inputText, setInputText] = useState("");
  //ref = useRef(null);

  /*const handleNext = () => {
    const convertableFormInstance = ref.current.getInstance();
    convertableFormInstance.next();
  };*/

  return (
    <from>
      <label>
          {children}
          Android to IOS:
          <br/>
          <textarea id={id} name={name} rows={rows} cols={cols} ref={innerRef} className="ConvertableForm"/>
      </label>
    </from>
  );
};

ConvertableForm.defaultProps = {
  id: '',
  name: '',
  rows: '',
  cols: '',
  innerRef: null
}

ConvertableForm.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  innerRef: PropTypes.func
}