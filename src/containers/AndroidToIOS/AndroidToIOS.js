import React, {useState, useRef} from 'react'
import ConvertableForm from '../../components/ConvertableForm';
import Button from '../../components/Button';

/**
 * Creates the page
 * @returns default android to ios page
 */
export default function AndroidToIOS() {
  /*const [data, setData] = useState('');
  const ref = (textAreaData) => {
    setData(textAreaData);
  }*/
  const convertableRef = useRef(null);
  const handleClick = event => {
    // 👇️ access textarea value
    console.log(convertableRef.current.value);
  };

  return (
    <div>
        <ConvertableForm innerRef={convertableRef}/>
        <Button type='submit' onClick={() => handleClick()}>Send</Button>
    </div>
  )
}

/*function clickAction() {
  console.log(ref.current.value);
}*/

/**
 * Renders logo
 * @returns logo
 */
function renderLogo() {
    return (
        <div>
            log
        </div>
    )
}