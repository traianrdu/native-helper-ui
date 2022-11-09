import React from 'react';
import {convertAndroidToIOS} from '../../services/AndroidToIOS.js';

export default function Button() {
  return (
    <div>
      <button type="button" onClick={() => btnClick("<?xml version=\"1.0\" encoding=\"utf-8\"?><resources><string name=\"string_name\">text_string</string></resources>")}>Send</button>
    </div>
);
}

/**
 * Create btn action to convert android to IOS
 */
function btnClick(data) {
  //debugger
  let response = convertAndroidToIOS(data)
  console.log(response);
}