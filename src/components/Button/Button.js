import React from 'react';
import PropTypes from 'prop-types'
import {convertAndroidToIOS} from '../../services/AndroidToIOS.js';

export default function Button({ children, type, isDisabled, onClick }) {
  return (
    <div>
      <button type={type} disabled={isDisabled} onClick={onClick}>{children}</button>
    </div>
  );
}

Button.defaultProps = {
  type: 'button',
  isDisabled: false,
  onClick: btnClick
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

// onClick={() => btnClick("<?xml version=\"1.0\" encoding=\"utf-8\"?><resources><string name=\"string_name\">text_string</string></resources>")}
/**
 * Create btn action to convert android to IOS
 */
function btnClick() {
  //debugger
  /*let response = convertAndroidToIOS(data)
  console.log(response);*/
  return;
}