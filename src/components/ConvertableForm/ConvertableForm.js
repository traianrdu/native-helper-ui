import React from 'react';
import './ConvertableForm.css';

export default function ConvertableForm({ children, id, name, rows, cols, inputRef }) {
  //const [inputText, setInputText] = useState("");
  //ref = useRef(null);

  /*const handleNext = () => {
    const convertableFormInstance = ref.current.getInstance();
    convertableFormInstance.next();
  };*/

  return (
    <form>
      <label>
          {children}
          <br/>
          <textarea id={id} name={name} rows={rows} cols={cols} ref={inputRef} className="ConvertableForm"/>
      </label>
    </form>
  );
};