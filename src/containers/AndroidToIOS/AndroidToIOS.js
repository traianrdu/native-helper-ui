import React, {useRef} from 'react'
import ConvertableForm from '../../components/ConvertableForm';
import Button from '../../components/Button';
import {convertAndroidToIOS} from '../../services/AndroidToIOS.js';

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
  const handleSendConvertableText = event => {
    // access textarea value
    let data = convertableRef.current.value
    // test string "<?xml version="1.0" encoding="utf-8"?><resources><string name="string_name">text_string</string></resources>"
    let response = convertAndroidToIOS(data)
    console.log("1")
    console.log(response); // show response
    console.log("2")
  };

  return (
    <div>
        <ConvertableForm inputRef={convertableRef}>Android to IOS:</ConvertableForm>
        <Button type='submit' onClick={() => handleSendConvertableText()}>Send</Button>
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